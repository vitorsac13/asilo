import styles from './page.module.css'
import { FaPills, FaHeartbeat, FaCheckCircle } from "react-icons/fa"

export default function About(){

    return (
    <div className={styles.container}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Quem Somos</h1>
        <p>
          O Asilo é uma instituição de longa permanência para idosos dedicada ao cuidado da saúde e bem-estar dos idosos.
        </p>
      </section>

      {/* SOBRE */}
      <section className={styles.section}>
        <h2>Nossa História</h2>
        <p>
          O Asilo foi inaugurado em 1950 e desde então vem fazendo o seu trabalho com excelência,
          oferecendo serviços para a saúde e bem-estar dos idosos acolhidos.
        </p>
      </section>

      {/* MISSÃO VISÃO VALORES */}
      <section className={styles.cardsSection}>
        <div className={styles.card}>
          <FaHeartbeat className={styles.icon} />
          <h3>Missão</h3>
          <p>
            Garantir o acesso da população idosa ao acolhimento e cuidado necessário.
          </p>
        </div>

        <div className={styles.card}>
          <FaPills className={styles.icon} />
          <h3>Visão</h3>
          <p>
            Ser referência estadual em cuidados, recebendo assim o reconhecimento pela
            excelência e dedicação.
          </p>
        </div>

        <div className={styles.card}>
          <FaCheckCircle className={styles.icon} />
          <h3>Valores</h3>
          <p>
            Ética, cuidado, responsabilidade social e respeito à vida.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Compromisso com a Saúde</h2>
        <p>
          Trabalhamos todos os dias para oferecer confiança e bem-estar aos idosos acolhidos.
        </p>
      </section>

    </div>
  )
  
}