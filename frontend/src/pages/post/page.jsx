import styles from './page.module.css'

export default function Post() {
  const post = {
    name: "Como aprender JavaScript do zero",
    description: "JavaScript é uma das linguagens mais populares do mundo e essencial para desenvolvimento web moderno.",
    date: "04 de Fevereiro de 2026",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
  }

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