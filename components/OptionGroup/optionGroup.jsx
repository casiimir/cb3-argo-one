import Translator from "../Translator";
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
    <>
      <label className={styles.Label} htmlFor={typeValue}>
        {textValue}
      </label>
      <select
        className={styles.Select}
        name={typeValue}
        id={typeValue}
        onChange={onChangeFn}
        required
      >
        <optgroup className={styles.OptionGroup}>
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
    </>
  );
};

export default OptionGroup;
