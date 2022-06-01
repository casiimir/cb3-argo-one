import styles from "./styles.module.scss";

const DatePicker = ({ firstDateFn, secondDateFn }) => {
  return (
    <div className={styles.Container}>
      <input className={styles.Input} type="date" onChange={firstDateFn} />
      <input className={styles.Input} type="date" onChange={secondDateFn} />
    </div>
  );
};

export default DatePicker;
