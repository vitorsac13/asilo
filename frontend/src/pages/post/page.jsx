import styles from './page.module.css'

export default function Post() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [product, setPost] = useState(null)
    const [loading, setLoading] = useState(true)

	useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setPost(data.body)
                }
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [id])

  return (
    <div className={styles.postContainer}>
      <div className={styles.postCard}>
        <img src={post.image} alt={post.name} className={styles.postImage} />

        <div className={styles.postContent}>
          <span className={styles.postDate}>{post.date}</span>
          <h1 className={styles.postTitle}>{post.name}</h1>
          <p className={styles.postDescription}>{post.description}</p>
        </div>
      </div>
    </div>
  )
}