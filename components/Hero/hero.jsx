import { useState, useEffect } from "react";
import { useWindowSize } from "../../utils/utils";
import { slideData } from "../../utils/data";
import Image from "next/image";

import DynamicParagraph from "../DynamicParagraph";
import StaticParagraph from "../StaticParagraph";

import styles from "./styles.module.scss";

const Hero = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fadeIn]);

  return (
    <>
      {size.width >= 475 ? (
        <section>
          <div className={imgClasses}>
            <Image
              src={slideData.imgUrl[imgCount]}
              alt="welcome to sicily"
              width={3000}
              height={2000}
              layout="responsive"
              placeholder="empty"
              priority
              quality={100}
              sizes="2048w"
              className={styles.Hero_img}
            />
          </div>
          <div className={styles.homepage__desc}>
            <DynamicParagraph />
          </div>
        </section>
      ) : (
        <section>
          <div className={styles.Static}>
            <Image
              src={slideData.mobileImgUrl[0]}
              alt="welcome to sicily"
              width={1300}
              height={1847}
              layout="responsive"
              placeholder="empty"
              priority
              quality={100}
              sizes="2048w"
              className={styles.Hero_img}
            />
          </div>
          <div className={styles.homepage__desc}>
            <StaticParagraph />
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
