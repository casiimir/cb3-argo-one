import styles from "./styles.module.scss";

const OptionGroup = ({
  data,
  onChangeFn,
  typeValue,
  defaultText,
  textValue,
<<<<<<< Updated upstream
  defaultValue,
=======
  label,
>>>>>>> Stashed changes
}) => {
  console.log(data);
  return (
    <div>
      <label className={styles.Label} htmlFor={typeValue}>
        {" "}
        {textValue}{" "}
      </label>
      <select
        className={styles.Select}
        name={typeValue}
        id={typeValue}
        onChange={onChangeFn}
        required
      >
<<<<<<< Updated upstream
        <optgroup classsName={styles.OptionGroup} label="Sicily's provinces">
          <option className={styles.Option} value={defaultValue || "null"}>
            {defaultText}
=======
        <optgroup classsName={styles.OptionGroup} label="choose">
          <option className={styles.Option} value="null">
            {defaultValue}
>>>>>>> Stashed changes
          </option>
          {data.map((element) => (
            <option
              className={styles.Option}
              value={element.code || element.id}
              key={element.url || element.name}
            >
              {element.name}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default OptionGroup;
