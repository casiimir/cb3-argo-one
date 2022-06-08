import Contact from "../../components/ContactForm";
import styles from "./style.module.scss";
import Image from "next/image";
export default function ContactUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contactImg}>
        <Image
          src="https://i.ibb.co/xML1pGy/lapacontactus.jpg"
          alt="lapacontactus"
          width={2400}
          height={1598}
          layout="responsive"
          className={styles.backimg}
        ></Image>
      </div>
      <div className={styles.contact}>
        <Contact />
      </div>
    </div>
  );
}
