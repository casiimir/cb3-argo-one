import styles from "./styles.module.scss";
import Image from "next/image";
import { useWindowSize } from "../../utils/utils";
export default function Loginpage() {
  const { width } = useWindowSize();
  return (
    <div className={styles.login}>
      <div className={styles.loginImg}>
        {width > 475 ? (
          <Image
            src="https://i.ibb.co/xLpYPpG/0674203617f60083ac3a61ddf87a8dda.jpg"
            alt="testa"
            width={2992}
            height={2244}
            layout="responsive"
            objectFit="cover"
          />
        ) : (
          <Image
            src="https://i.ibb.co/xLpYPpG/0674203617f60083ac3a61ddf87a8dda.jpg"
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
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.wrapper__title}>Sign in</h2>
        <form className={styles.wrapper__form}>
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
            id="password"
            autoComplete="off"
            placeholder="Your password..."
          ></input>
        </form>
        <button className={styles.wrapper__button}>Sign in</button>
      </div>
    </div>
  );
}
