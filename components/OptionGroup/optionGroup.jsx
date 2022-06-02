import styles from "./styles.module.scss";

const OptionGroup = ({
	data,
	onChangeFn,
	typeValue,
	defaultText,
	textValue,
	defaultValue,
}) => {


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
        <optgroup className={styles.OptionGroup} label="Sicily's provinces">
          <option className={styles.Option} value={defaultValue || "null"}>
            {defaultText}
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
