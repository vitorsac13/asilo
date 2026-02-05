import styles from './page.module.css'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact(){

    return (
    <div className={styles.container}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Contato</h1>
        <p>
          Entre em contato com o Asilo. Estamos prontos para atender você.
        </p>
      </section>

      {/* INFORMAÇÕES */}
      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <FaPhoneAlt className={styles.icon} />
          <h3>Telefone</h3>
          <p>(11) 4000-0000</p>
        </div>

        <div className={styles.infoCard}>
          <FaEnvelope className={styles.icon} />
          <h3>Email</h3>
          <p>contato@asilo</p>
        </div>

        <div className={styles.infoCard}>
          <FaMapMarkerAlt className={styles.icon} />
          <h3>Endereço</h3>
          <p>Botucatu - SP, Brasil</p>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className={styles.formSection}>
        <h2>Envie uma mensagem</h2>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Nome completo" />
            <input type="email" placeholder="Email" />
          </div>

          <input type="text" placeholder="Assunto" />

          <textarea rows="5" placeholder="Sua mensagem"></textarea>

          <button type="submit">Enviar Mensagem</button>
        </form>
      </section>

    </div>
  )
  
}