import { useState, useEffect } from "react";
import { slideData } from "../../utils/data";

import styles from "./styles.module.scss";

const DynamicParagraph = () => {
  const [slideText, setSlideText] = useState("our history");
  const [txtIndexCounter, setTxtIndexCounter] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [classes, setClasses] = useState(styles.Dynamic);

  const handleTextSlide = () => {
    if (txtIndexCounter < slideData.textData.length - 1) {
      setTxtIndexCounter((prev) => prev + 1);
      setSlideText(slideData.textData[txtIndexCounter]);
      setClasses(styles.Slide);
      setFadeIn((prev) => !prev);

      setTimeout(() => {
        setClasses(styles.Dynamic);
      }, 80);
    } else {
      setTxtIndexCounter(0);
      setSlideText(slideData.textData[txtIndexCounter]);
      setClasses(styles.Slide);
      setFadeIn((prev) => !prev);

      setTimeout(() => {
        setClasses(styles.Dynamic);
      }, 80);
    }
  };

  useEffect(() => {
    setFadeIn(true);
    fadeIn && setTimeout(handleTextSlide, 3000);
  }, [fadeIn]);

  return (
    <div className={styles.Paragraph_Container}>
      <p>Discover Sicily</p>
      <p>through</p>
      <p className={classes}>{slideText}</p>
    </div>
  );
};

export default DynamicParagraph;
