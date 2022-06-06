import { useState, useEffect } from "react";
import { useWindowSize } from "../../utils/utils";
import Image from "next/image";
import { slideData } from "../../utils/data";

import DynamicParagraph from "../../components/DynamicParagraph/dynamicParagraph";

import styles from "./styles.module.scss";

export default function Home() {
  const [imgClasses, setImgClasses] = useState(styles.Dynamic);
  const [imgCount, setImgCount] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  const size = useWindowSize();

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
      <section className={imgClasses}>
        {size.width >= 475 ? (
          <Image
            src={slideData.imgUrl[imgCount]}
            alt="welcome to sicily"
            width={2048}
            height={1152}
            layout="responsive"
            placeholder="empty"
            priority
            className={styles.Hero_img}
          />
        ) : (
          <Image
            src={slideData.mobileImgUrl[imgCount]}
            alt="welcome to sicily"
            width={1152}
            height={2048}
            layout="responsive"
            placeholder="empty"
            priority
            className={styles.Hero_img}
          />
        )}
      </section>

      <div className={styles.homepage__desc}>
        <DynamicParagraph />
      </div>
    </div>
  );
}
