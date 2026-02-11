import styles from './page.module.css'
import { useEffect, useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"

export default function Admin() {
    const navigate = useNavigate()
    const authData = JSON.parse(localStorage.getItem("auth"))

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        date: ""
    })
    const [editingId, setEditingId] = useState(null)

    const API_URL = "http://localhost:3000/posts"

    // Proteção da rota, manda o usuario para a homepage se a role não for admin
    useEffect(() => {
        if (!authData || authData.user.role !== "admin") {
            navigate("/")
        }
    }, [authData, navigate])

    
    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setPosts(data.body)
                }
            })
            .finally(() => setLoading(false))
    }, [])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const method = editingId ? "PUT" : "POST"
        const url = editingId ? `${API_URL}/${editingId}` : API_URL

        await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authData.token}`
            },
            body: JSON.stringify({
                ...formData,
                description: Number(formData.description)
            })
        })

        setFormData({ name: "", description: "", image: "", date: "" })
        setEditingId(null)
        reloadPosts()
    }

    const reloadPosts = async () => {
        const res = await fetch(API_URL)
        const data = await res.json()
        setPosts(data.body)
    }

    const handleEdit = (product) => {
        setEditingId(product._id)
        setFormData({
            name: product.name,
            description: product.description,
            image: product.image,
            date: product.date
        })
    }

    const handleDelete = async (id) => {
        if (!window.confirm("Deseja remover este post?")) return

        await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${authData.token}`
            }
        })

        reloadPosts()
    }

    if (loading) {
        return <h2 className={styles.loading}>Carregando posts...</h2>
    }

    return (
        <div className={styles.container}>
            <h1>Edição de Posts</h1>

            {/* FORM */}
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Titulo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="textarea"
                    name="description"
                    placeholder="descricao"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="image"
                    placeholder="URL da imagem"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="date"
                    placeholder="Data"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    {editingId ? "Atualizar Post" : "Adicionar Post"}
                </button>
            </form>

            {/* LISTA */}
            <div className={styles.list}>
                {posts.map(product => (
                    <div key={product._id} className={styles.item}>
                        <img src={product.image} alt={product.name} />

                        <div>
                            <strong>{product.name}</strong><br></br>
                            <span>
                                R$ {Number(product.description).toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2
                                })}
                            </span>
                        </div>

                        <div className={styles.actions}>
                            <button onClick={() => handleEdit(product)}>Editar</button>
                            <button
                                className={styles.delete}
                                onClick={() => handleDelete(product._id)}
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}