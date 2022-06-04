import { useState, useEffect } from "react";
import Image from "next/image";
import { slideData } from "../../utils/data";

import DynamicParagraph from "../../components/DynamicParagraph/dynamicParagraph";

import styles from "./styles.module.scss";

export default function Home() {
  const [imgClasses, setImgClasses] = useState(styles.Dynamic);
  const [imgCount, setImgCount] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  const handleImgSlide = () => {
    if (imgCount < slideData.imgUrl.length - 1) {
      setImgCount((prev) => prev + 1);
      setImgClasses(styles.Slide);
      setFadeIn((prev) => !prev);

      setTimeout(() => {
        setImgClasses(styles.Dynamic);
      }, 80);
    } else {
      setImgCount(0);

      setImgClasses(styles.Slide);
      setFadeIn((prev) => !prev);

      setTimeout(() => {
        setImgClasses(styles.Dynamic);
      }, 80);
    }
  };

  useEffect(() => {
    setFadeIn(true);
    fadeIn && setTimeout(handleImgSlide, 3000);
  }, [fadeIn]);

  return (
    <div className={styles.homepage}>
      {fadeIn ? (
        <header className={styles.Styles}>
          <Image
            src={slideData.imgUrl[imgCount]}
            alt="welcome to sicily"
            width={2400}
            height={2400}
            layout="responsive"
            placeholder="empty"
            className={imgClasses}
          />
        </header>
      ) : (
        <header className={styles.Dynamic}>
          <Image
            src={slideData.imgUrl[imgCount]}
            alt="welcome to sicily"
            layout="responsive"
            width={2400}
            height={2400}
            placeholder="empty"
            className={imgClasses}
          />
        </header>
      )}

      <div className={styles.homepage__desc}>
        <DynamicParagraph />
      </div>
    </div>
  );
}
