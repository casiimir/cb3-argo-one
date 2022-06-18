/* eslint-disable @next/next/no-img-element */
import { useWindowSize } from "../../utils/utils";
import Image from "next/image";
import Translator from "../../components/Translator";
import styles from "./styles.module.scss";
import Head from "next/head";

const oliveBranchImg =
  "https://i.ibb.co/hFkrYbq/vilija-valeisaite-x-TZpip-USEj8-unsplash.jpg";

const avatar_federica = "https://i.ibb.co/yY8WxBP/Federica-Centorbi-round.png";
const avatar_elenia = "https://i.ibb.co/y543nbf/Elenia-round.png";
const avatar_nicolo = "https://i.ibb.co/xX2cpyG/Nicolo-round.png";
const avatar_paolo = "https://i.ibb.co/bHyrKXv/Paolo-round.png";
const avatar_andrea = "https://i.ibb.co/34KChFn/Andrea-round.png";

export default function About() {
  const { width } = useWindowSize();
  return (
    <div className={styles.about}>
       <Head>
        <title>About Us</title>
        <meta property="og:title" content="About Us" key="title" />
      </Head>
      <h1 className={styles.about__title}><Translator word="about us" type="fwupper"/></h1>
      <div className={styles.about__wrapper}>
        {width >= 475 ? (
          <Image
            src={oliveBranchImg}
            alt="ramo ulivo"
            border="0"
            width={2048}
            height={1152}
            layout="responsive"
            placeholder="empty"
            objectFit="cover"
            className={styles.about__img}
          />
        ) : (
          <Image
            src={oliveBranchImg}
            alt="ramo ulivo"
            border="0"
            width={1152}
            height={2048}
            layout="responsive"
            placeholder="empty"
            objectFit="cover"
            className={styles.about__img}
          />
        )}

        <article className={styles.about__descWrapper}>
          <div className={styles.about__descContainer}>
            <h2 className={styles.about__descTitle}><Translator word="who we are" type="fwupper"/></h2>
            <p className={styles.about__desc}>
              <Translator word="about desc1" type="fwupper" />
              <br />
              <Translator word="about desc2" type="fwupper" />
              <br />
              <br />
              <Translator word="about desc3" type="fwupper" />
              <br />
              <br />
              <Translator word="about desc4" type="fwupper" />
              <br />
              <br />
              <strong>
                <Translator word="about desc5" type="fwupper" />
              </strong>
            </p>
            <div className={styles.about__photos}>
              <picture className={styles.about__pic}>
                <p>Elenia Centamore</p>
                <a href="https://www.linkedin.com/in/elenia-centamore-ba6200116/">
                  <img
                    src={avatar_elenia}
                    alt="Elenia Centamore"
                    title="Elenia Centamore"
                  ></img>
                </a>
              </picture>
              <picture className={styles.about__pic}>
                <p>Nicolò Piccolo</p>
                <a href="https://www.linkedin.com/in/nicolo-piccolo-nickpick77/">
                  <img
                    src={avatar_nicolo}
                    alt="Nicolo Piccolo"
                    title="Nicolò Piccolo"
                  ></img>
                </a>
              </picture>

              <picture className={styles.about__pic}>
                <p>Paolo Rotondo</p>
                <a href="https://www.linkedin.com/in/paolo-rotondo/">
                  <img
                    src={avatar_paolo}
                    alt="Paolo Rotondo"
                    title="Paolo Rotondo"
                  ></img>
                </a>
              </picture>

              <picture className={styles.about__pic}>
                <p>Federica Centorbi</p>
                <a href="https://www.linkedin.com/in/federica-centorbi/">
                  <img
                    src={avatar_federica}
                    alt="Federica Centorbi"
                    title="Federica Centorbi"
                  ></img>
                </a>
              </picture>
              <picture className={styles.about__pic}>
                <p>Andrea Cicala</p>
                <a href="https://www.linkedin.com/in/cicala-andrea/">
                  <img
                    src={avatar_andrea}
                    alt="Andrea Cicala"
                    title="Andrea Cicala"
                  ></img>
                </a>
              </picture>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
