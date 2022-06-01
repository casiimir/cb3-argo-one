import styles from "./styles.module.scss";

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.wrapper__form}>
        <div className={styles.title}>
          <h1> Send us a message </h1>
        </div>
        <div className={styles.input}>
          <label htmlFor="Name"></label>
          <input
            className={styles.wrapper__input}
            type="text"
            id="name"
            placeholder="Your name..."
          ></input>
          <label htmlFor="Email"></label>
          <input
            className={styles.wrapper__input}
            type="text"
            id="email"
            placeholder="Your email..."
          ></input>
        </div>

        <br />

        <div className={styles.message}>
          <label htmlFor="Message"></label>
          <textarea
            type="text"
            id="message"
            placeholder="Your message..."
          ></textarea>
          <br />
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}
