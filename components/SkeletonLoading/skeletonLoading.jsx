import styles from "./styles.module.scss";

const SkeletonLoading = () => {
  return (
    <section className={styles.Loading}>
      <div className={styles.card}>
        <div className={`${styles.card__image} ${styles.loading}`}></div>
        <div className={`${styles.card__title} ${styles.loading}`}></div>
        <div className={`${styles.card__description} ${styles.loading}`}></div>
      </div>
      <div className={styles.card}>
        <div className={`${styles.card__image} ${styles.loading}`}></div>
        <div className={`${styles.card__title} ${styles.loading}`}></div>
        <div className={`${styles.card__description} ${styles.loading}`}></div>
      </div>
      <div className={styles.card}>
        <div className={`${styles.card__image} ${styles.loading}`}></div>
        <div className={`${styles.card__title} ${styles.loading}`}></div>
        <div className={`${styles.card__description} ${styles.loading}`}></div>
      </div>
      <div className={styles.card}>
        <div className={`${styles.card__image} ${styles.loading}`}></div>
        <div className={`${styles.card__title} ${styles.loading}`}></div>
        <div className={`${styles.card__description} ${styles.loading}`}></div>
      </div>
      <div className={styles.card}>
        <div className={`${styles.card__image} ${styles.loading}`}></div>
        <div className={`${styles.card__title} ${styles.loading}`}></div>
        <div className={`${styles.card__description} ${styles.loading}`}></div>
      </div>
    </section>
  );
};

export default SkeletonLoading;
