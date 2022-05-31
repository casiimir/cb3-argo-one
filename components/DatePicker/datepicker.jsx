import styles from "./styles.module.scss";

const DatePicker = ({ firstDateFn, secondDateFn }) => {
  return (
    <div className={styles.Container}>
      <input type="date" onChange={firstDateFn} />
      <input type="date" onChange={secondDateFn} />
    </div>
  );
};

export default DatePicker;
