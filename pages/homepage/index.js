import { useState, useEffect } from "react";
import Image from "next/image";
import { slideData } from "../../utils/data";

import DynamicParagraph from "../../components/DynamicParagraph/dynamicParagraph";

import styles from "./styles.module.scss";

//const scalaDeiTurchiImg =
("https://i.ibb.co/fC37R1m/davide-ragusa-Qb-Dkh-VZ80-To-unsplash.jpg");

export default function Home() {
  const [imgClasses, setImgClasses] = useState(styles.Dynamic);
  const [imgCount, setImgCount] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  const handleImgSlide = () => {
    setFadeIn((prev) => !prev);
    if (imgCount < slideData.imgUrl.length - 1) {
      setImgCount((prev) => (prev += 1));
      setImgClasses(styles.Slide);

      setTimeout(() => {
        setFadeIn(false);
        //setImgClasses(styles.Dynamic);
      }, 1000);
    } else {
      setImgCount(0);
      //setImgClasses(styles.Slide);
      setTimeout(() => {
        setFadeIn(false);
        //setImgClasses(styles.Dynamic);
      }, 1000);
    }
  };
  const handleFadeIn = () => {
    setTimeout(() => handleImgSlide, 2000);
  };

  return (
    <div className={styles.homepage}>
      <header className={styles.homepage__wrapper}>
        <Image
          src={slideData.imgUrl[imgCount]}
          alt="welcome to sicily"
          width={1920}
          height={1080}
          layout="responsive"
          placeholder="empty"
          onLoad={handleFadeIn}
          className={`${styles.Dynamic} ${fadeIn && styles.Slide}`}
        />
      </header>

      <div className={styles.homepage__desc}>
        <DynamicParagraph />
      </div>
    </div>
  );
}
