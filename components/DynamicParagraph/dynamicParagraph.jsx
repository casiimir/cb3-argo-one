import { useState, useEffect } from "react";
import { slideData } from "../../utils/data";
<<<<<<< HEAD
import styles from "./styles.module.scss";

export const DynamicParagraph = () => {
  const [slideText, setSlideText] = useState("Enjoy");
  const [counter, setCounter] = useState(0);
  const [sentinel, setSentinel] = useState(false);

  const handleTextSlide = () => {
    if (counter < slideData.textData.length - 1) {
      console.log(counter);
      setCounter((prev) => prev + 1);
      setSlideText(slideData.textData[counter]);
      setSentinel((prev) => !prev);
    } else {
      setCounter(0);
      setSlideText(slideData.textData[counter]);
      setSentinel((prev) => !prev);
=======

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
>>>>>>> dev
    }
  };

  useEffect(() => {
<<<<<<< HEAD
    setSentinel(true);
    sentinel && setTimeout(handleTextSlide, 2000);
  }, [sentinel]);
=======
    setFadeIn(true);
    fadeIn && setTimeout(handleTextSlide, 3000);
  }, [fadeIn]);
>>>>>>> dev

  return (
    <div className={styles.Container}>
      <p>Discover Sicily</p>
<<<<<<< HEAD
      <p>trhough</p>
      <p>{slideText}</p>
    </div>
  );
};
=======
      <p>through</p>
      <p className={classes}>{slideText}</p>
    </div>
  );
};

export default DynamicParagraph;
>>>>>>> dev
