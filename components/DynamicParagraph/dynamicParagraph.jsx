import { useState, useEffect } from "react";
import { slideData } from "../../utils/data";
import styles from "./styles.module.scss";

const DynamicParagraph = ({ setCount }) => {
  const [slideText, setSlideText] = useState("Enjoy");
  const [counter, setCounter] = useState(0);
  const [sentinel, setSentinel] = useState(false);
  const [classes, setClasses] = useState(styles.Dynamic);

  const handleTextSlide = () => {
    if (counter < slideData.textData.length - 1) {
      console.log(counter);
      setCounter((prev) => prev + 1);
      setSlideText(slideData.textData[counter]);
      setSentinel((prev) => !prev);
      setClasses(styles.Slide);
      setTimeout(() => setClasses(styles.Dynamic), 80);
    } else {
      setCounter(0);
      setSlideText(slideData.textData[counter]);
      setSentinel((prev) => !prev);
      setClasses(styles.Slide);
      setTimeout(() => setClasses(styles.Dynamic), 80);
    }
  };

  useEffect(() => {
    setSentinel(true);
    sentinel && setTimeout(handleTextSlide, 2000);
  }, [sentinel]);

  return (
    <div className={styles.Container}>
      <p>Discover Sicily</p>
      <p>through</p>
      <p className={classes}>{slideText}</p>
    </div>
  );
};

export default DynamicParagraph;
