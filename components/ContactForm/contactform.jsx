import styles from "./styles.module.scss";

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
          <h1> Send us a message </h1>
        </div>
      <form className={styles.wrapper__form}>
        
        <div className={styles.input}>
          <label htmlFor="Name"></label>
          <input
            className={styles.wrapper__input}
            type="text"
            id="name"
            placeholder="Your name..."
          ></input>
          </div>
          <div className={styles.input}>
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
          <textarea className={styles.textarea}
            type="text"
            id="message"
            placeholder="Your message..."
          ></textarea>
          <br />
          <div className={styles.button}>
          <button className={styles.button}>Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}
