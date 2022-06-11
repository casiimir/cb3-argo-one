/* eslint-disable @next/next/no-img-element */
//eslint-disable-next-line
import { useDataContext } from "../../context/DataContext/dataContext";
import styles from "./index.module.scss";

const Flag = () => {
  const { dataStore, setLanguage } = useDataContext();
  const lang = dataStore.language;

  return (
    <span className={styles.span}>
      {lang === "en-US" ? (
        <button className={styles.btn} onClick={() => setLanguage("it-IT")}>
          <img
            className={styles.flag}
            src="https://img.icons8.com/color/48/undefined/italy.png"
            alt="flag"
          />
        </button>
      ) : (
        <button className={styles.btn} onClick={() => setLanguage("en-US")}>
          <img
            className={styles.flag}
            src="https://img.icons8.com/color/48/undefined/great-britain.png"
            alt="flag"
          />
        </button>
      )}
    </span>
  );
};

export default Flag;
