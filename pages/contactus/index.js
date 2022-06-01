import Contact from "../../components/ContactForm";
import styles from "./style.module.scss";
import Image from "next/image";
export default function ContactUs() {
  return (
  
    <div className={styles.contact}>
      <Image
        src="https://i.ibb.co/xML1pGy/lapacontactus.jpg"
        alt="lapacontactus"
        width={2048}
        height={1280}
        layout="responsive"
        className={styles.backimg}
      ></Image>
      <div className={styles.contact}>
        <Contact/>
      </div>
      
    </div>
    
  );
}
