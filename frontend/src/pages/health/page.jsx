import styles from './page.module.css'
import { FaHeartbeat, FaBrain, FaLeaf, FaRunning } from "react-icons/fa"

export default function Health(){

    return (
    <div className={styles.container}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Saúde & Bem-Estar</h1>
        <p>
          Promovendo qualidade de vida por meio de informação, prevenção e cuidado.
        </p>
      </section>

      {/* INTRO */}
      <section className={styles.section}>
        <h2>Cuidar da saúde é investir no futuro</h2>
        <p>
          O Asilo acredita que saúde vem com o cuidado. Envolve hábitos
          saudáveis, prevenção, equilíbrio emocional e acompanhamento profissional.
        </p>
      </section>

      {/* CARDS */}
      <section className={styles.cardsSection}>
        <div className={styles.card}>
          <FaHeartbeat className={styles.icon} />
          <h3>Saúde Física</h3>
          <p>
            Pratique atividades físicas, mantenha uma alimentação equilibrada e
            faça check-ups regulares.
          </p>
        </div>

        <div className={styles.card}>
          <FaBrain className={styles.icon} />
          <h3>Saúde Mental</h3>
          <p>
            O bem-estar emocional é essencial. Busque apoio profissional quando necessário.
          </p>
        </div>

        <div className={styles.card}>
          <FaLeaf className={styles.icon} />
          <h3>Qualidade de Vida</h3>
          <p>
            Durma bem, reduza o estresse e mantenha uma rotina saudável.
          </p>
        </div>

        <div className={styles.card}>
          <FaRunning className={styles.icon} />
          <h3>Prevenção</h3>
          <p>
            A prevenção é o melhor caminho para uma vida longa e saudável.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className={styles.textSection}>
        <h2>Nossa atuação em Saúde & Bem-Estar</h2>
        <p>
          O asilo investe os recursos municipais e estaduais recebidos em saúde e bem-estar para os idosos acolhidos.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Compromisso com a Vida</h2>
        <p>
          Nossa missão é promover saúde com qualidade, confiança e responsabilidade social.
        </p>
      </section>

    </div>
  )
  
}