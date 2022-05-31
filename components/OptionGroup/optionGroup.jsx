import styles from "./styles.module.scss";

const OptionGroup = ({ data, onChangeFn, typeValue, defaultValue }) => {
  console.log(data);
  return (
    <label htmlFor={typeValue}>
      <select
        className={styles.Select}
        name={typeValue}
        id={typeValue}
        onChange={onChangeFn}
      >
        <optgroup label="Sicily's provinces">
          <option value="null">{defaultValue}</option>
          {data.map((city) => (
            <option value={city.id} key={city.id}>
              {city.name}
            </option>
          ))}
        </optgroup>
      </select>
    </label>
  );
};

export default OptionGroup;
