import styles from './page.module.css'

export default function Post() {
  const post = {
    titulo: "Como aprender JavaScript do zero",
    descricao:
      "JavaScript é uma das linguagens mais populares do mundo e essencial para desenvolvimento web moderno.",
    data: "04 de Fevereiro de 2026",
    imagem:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
  }

  return (
    <div className={styles.postContainer}>
      <div className={styles.postCard}>
        <img src={post.imagem} alt={post.titulo} className={styles.postImage} />

        <div className={styles.postContent}>
          <span className={styles.postDate}>{post.data}</span>
          <h1 className={styles.postTitle}>{post.titulo}</h1>
          <p className={styles.postDescription}>{post.descricao}</p>
        </div>
      </div>
    </div>
  )
}