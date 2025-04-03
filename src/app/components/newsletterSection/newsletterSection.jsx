import styles from "./newsletterSection.module.css";

const NewsletterSection = ({title, description}) => {
    return (
        <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>{title}Fique por dentro!</h2>
          <p className={styles.newsletterDescription}>
            {description}
            Assine nossa newsletter e receba os melhores memes toda semana!
          </p>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className={styles.newsletterInput}
            />
            <button className={styles.newsletterButton}>Assinar</button>
          </div>
          <p className={styles.newsletterDisclaimer}>
            Nós respeitamos sua privacidade. Cancele quando quiser.
          </p>
        </div>
        <div className={styles.newsletterImageContainer}>
          <img
            src="https://i.imgur.com/OELrGl5.jpg"
            alt="Newsletter"
            className={styles.newsletterImage}
          />
        </div>
      </section>
    )
}

export default NewsletterSection;