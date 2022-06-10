import Hero from "../../components/Hero/hero";
import CardList from "../../components/CardList";
import ExperienceFinder from "../../components/ExperienceFinder/ExperienceFinder";
import SkeletonLoading from "../../components/SkeletonLoading";
import { useDataContext } from "../../context/DataContext/dataContext";
import styles from "./styles.module.scss";

export default function Homepage() {
  const { dataStore } = useDataContext();


  return (
    <section className={styles.homepage}>
      <Hero />
      <section className={styles.homepage__map}>
        <ExperienceFinder />
        {dataStore.loading && <SkeletonLoading />}
      </section>
      <CardList />
    </section>
  );
}
