// import Contact from "../../components/ContactForm";
import styles from "./style.module.scss";
import Image from "next/image";
import { useWindowSize } from "../../utils/utils";
import Head from "next/head";

export default function ContactUs() {
  const { width } = useWindowSize();
  return (
    <div className={styles.wrapper}>
       <Head>
        <title>Contact Us</title>
        <meta property="og:title" content="Contact Us" key="title" />
      </Head>
      <h1 className={styles.wrapper__title}>Contact us</h1>
      <div className={styles.contactImg}>
        {width >= 475 ? (
          <Image
            src="https://i.ibb.co/xML1pGy/lapacontactus.jpg"
            alt="lapacontactus"
            width={2048}
            height={1280}
            layout="responsive"
            className={styles.backimg}
          />
        ) : (
          <Image
            src="https://i.ibb.co/RvSHhR4/3.jpg"
            alt="lapacontactus"
            border="0"
            width={1152}
            height={2048}
            layout="responsive"
            placeholder="empty"
            objectFit="cover"
            className={styles.about__img}
          />
        )}
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
              <button
                className={styles.button}
                onClick={(e) => e.preventDefault()}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
