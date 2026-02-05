import styles from './page.module.css'

export default function Post() {
  const post = {
    titulo: "Como aprender JavaScript do zero",
    descricao:
      "JavaScript é uma das linguagens mais populares do mundo e essencial para desenvolvimento web moderno.",
    data: "04 de Fevereiro de 2026",
    imagem:
      "https://images.unsplash.com/photo-1527430253228-e93688616381"
  }

  return (
    <div className="post-container">
      <div className="post-card">
        <img src={post.imagem} alt={post.titulo} className="post-image" />

        <div className="post-content">
          <span className="post-date">{post.data}</span>
          <h1 className="post-title">{post.titulo}</h1>
          <p className="post-description">{post.descricao}</p>
        </div>
      </div>
    </div>
  )
}