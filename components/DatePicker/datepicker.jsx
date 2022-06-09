import styles from "./styles.module.scss";

const DatePicker = ({ firstDateFn, secondDateFn }) => {
  return (
    <div>
 
      <div className={styles.Container}>
        <input
          className={styles.Input}
          type="date"
          onChange={firstDateFn}
          placeholder="Choose a date: "
          required
        />
        <input
          className={styles.Input}
          type="date"
          onChange={secondDateFn}
          placeholder="Choose a date: "
          required
        />
      </div>
    </div>
  );
};

export default DatePicker;
