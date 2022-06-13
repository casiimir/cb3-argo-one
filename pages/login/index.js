import styles from "./styles.module.scss";
import Image from "next/image";
import { useWindowSize } from "../../utils/utils";
import { useEffect, useState } from "react";
import Translator from "../../components/Translator";
import { useUserContext } from "../../context/UserContext/userContext";
import Link from "next/link";
import Head from "next/head";

export default function Loginpage() {
  const { setUsername } = useUserContext();
  const [user, setUser] = useState('')
  const { width } = useWindowSize();

  useEffect(() => {
    (localStorage.setItem("user", user))
  },[user])
  
  return (
    <div className={styles.login}>
       <Head>
        <title>Login</title>
        <meta property="og:title" content="Login" key="title" />
      </Head>
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
        <h2 className={styles.wrapper__title}><Translator word="sign in" type="fwupper" /></h2>
        <form className={styles.wrapper__form}>
          <input
            className={styles.wrapper__input}
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Your username..."
            onChange={(e) => setUser(e.target.value)}
          ></input>
          <input
            className={styles.wrapper__input}
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Your password..."
          ></input>
          <Link href={"/experiences"}>
        <button className={styles.wrapper__button} type="submit"><Translator word="sign in" type="fwupper" />
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
