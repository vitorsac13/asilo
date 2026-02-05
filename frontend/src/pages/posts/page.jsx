import styles from './page.module.css'
import { useEffect, useState, useMemo } from "react"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const API_URL = "http://localhost:3000/posts"
    
    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setPosts(data.body)
                }
            })
            .catch(error => {
                console.error("Error loading posts:", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className={styles.homeContainer}>

            <div className={styles.postsGrid}>
                {filteredProducts.length === 0 && (
                    <p>Nenhum produto encontrado.</p>
                )}

                {filteredProducts.map(post => (
                    <div key={post._id} className={styles.postCard}>
                        <Link to={`/post/${post._id}`} className={styles.postImage}>
                            <img src={post.image} alt={post.name}/>
                        </Link>

                        <Link to={`/post/${post._id}`} className={styles.postName}>
                            {post.name}
                        </Link>

                        <p className={styles.postName}> {Date(post.date).toLocaleString('pt-BR', {})} </p>

                    </div>
                ))}
            </div>
        </div>
    )
}