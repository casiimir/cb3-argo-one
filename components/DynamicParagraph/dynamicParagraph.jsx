import { useState, useEffect } from "react";
import { slideData } from "../../utils/data";
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
    }
  };

  useEffect(() => {
    setSentinel(true);
    sentinel && setTimeout(handleTextSlide, 2000);
  }, [sentinel]);

  return (
    <div className={styles.Container}>
      <p>Discover Sicily</p>
      <p>trhough</p>
      <p>{slideText}</p>
    </div>
  );
};
