import styles from "./styles.module.scss";

const OptionGroup = ({
  data,
  onChangeFn,
  typeValue,
  defaultValue,
  textValue,
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
      >
        <optgroup classsName={styles.OptionGroup} label="Sicily's provinces">
          <option className={styles.Option} value="null">
            {defaultValue}
          </option>
          {data.map((city) => (
            <option className={styles.Option} value={city.id} key={city.id}>
              {city.name}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default OptionGroup;
