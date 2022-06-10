import SearchInput from "../SearchInput/searchInput";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";

const ExperienceFinder = () => {
  const Map = dynamic(() => import("../Map"), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapper__map}>
        <Map center={[37.3111, 13.6333]} />
      </div>
      <div className={styles.wrapper__finder}>
        <SearchInput />
      </div>
    </section>
  );
};

export default ExperienceFinder;
