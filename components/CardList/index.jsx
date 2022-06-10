import { useEffect } from "react";
import { useDataContext } from "../../context/DataContext/dataContext";
import SkeletonLoading from "../SkeletonLoading";
import Card from "../Card";
import Translator from "../Translator";
import styles from "./index.module.scss";

const Cardlist = () => {
  const { dataStore, updateActivitiesData } = useDataContext();

  useEffect(() => {
    if (dataStore.activities !== null) {
      const selectedDateRange = [dataStore.date_to, dataStore.date_from];

      updateActivitiesData(
        dataStore.latLon,
        dataStore.selectedCategory,
        selectedDateRange,
        dataStore.language
      );
    }
  }, [dataStore.language]);

  // const classes = dataStore.setControl === true ? styles.title : styles.hide;

  return dataStore.activities !== null &&
    dataStore.activities.data.length > 0 ? (
    <div className={styles.global}>
      <h2 className={styles.title}>
        {<Translator word="experiences" type="upper" />}
      </h2>
      <div className={styles.card_wrapper}>
        dataStore.activities.data.map((card, index) => (
        <Card card={card} key={index} />
        ))
      </div>
    </div>
  ) : (
    ""
  );
};

export default Cardlist;
