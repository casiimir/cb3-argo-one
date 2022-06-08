import styles from "./styles.module.scss";

const DatePicker = ({ firstDateFn, secondDateFn }) => {
  return (
    <>
 
      <div className={styles.Container}>
        <input
          className={styles.Input}
          type="date"
          onChange={firstDateFn}
          required
        />
        <input
          className={styles.Input}
          type="date"
          onChange={secondDateFn}
          required
        />
      </div>
    </>
  );
};

export default DatePicker;
