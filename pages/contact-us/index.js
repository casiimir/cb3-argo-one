// import Contact from "../../components/ContactForm";
import styles from "./style.module.scss";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.wrapper__title}>Contact us</h1>
      <div className={styles.contactImg}>
        <Image
          src="https://i.ibb.co/xML1pGy/lapacontactus.jpg"
          alt="lapacontactus"
          width={2400}
          height={1598}
          layout="responsive"
          className={styles.backimg}
         
    
        ></Image>

        <div className={styles.form}>
          <h2> Send us a message </h2>
          <form className={styles.lapa}>
            <div className={styles.input}>
              <input
                className={styles.wrapper__input}
                type="text"
                id="name"
                autoComplete="off"
                placeholder="Your name..."
              ></input>
              <input
                className={styles.wrapper__input}
                type="text"
                id="email"
                autoComplete="off"
                placeholder="Your email..."
              ></input>
            </div>

            <div className={styles.message}>
              <textarea
                className={styles.textarea}
                type="text"
                id="message"
                autoComplete="off"
                placeholder="Your message..."
              ></textarea>
              <button className={styles.button}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
