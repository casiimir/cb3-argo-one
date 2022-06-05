import styles from "./index.module.scss";

const empty = () => {};

function Arrows(props) {
  const sx = props.sx || empty;
  const dx = props.dx || empty;

  return (
    <>
      <div className={styles.arrow_dx} onClick={dx}>
        <div className={styles.arrow_dx_top}></div>
        <div className={styles.arrow_dx_bottom}></div>
      </div>
      <div className={styles.arrow_sx} onClick={sx}>
        <div className={styles.arrow_sx_top}></div>
        <div className={styles.arrow_sx_bottom}></div>
      </div>
    </>
  );
}

export default Arrows;