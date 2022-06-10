import { useEffect } from "react";
import styles from "./styles.module.scss";

const Alert = ({ text, value, setFn, time, classStyle }) => {
  const theme = classStyle;
  const handleShowing = () => {
    setFn((prev) => !prev);
  };

  useEffect(() => {
    value && setTimeout(handleShowing, time);
    //eslint-disable-next-line
  }, [value]);
  return (
    <div className={`${styles.Alert} ${styles[theme]}`}>
      <p>{text}</p>
    </div>
  );
};

export default Alert;
