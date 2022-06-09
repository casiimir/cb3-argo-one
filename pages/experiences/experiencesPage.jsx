import { useState, useEffect } from "react";
import { useDataContext } from "../../context/DataContext/dataContext";
import { cities, mainCities } from "../../utils/data";
import { GetActivitiesByCity } from "../../utils/utils";
import ExpCard from "../../components/ExpCard";
import Image from "next/image";
import styles from "./index.module.scss";
import SkeletonLoading from "../../components/SkeletonLoading";

const Experiences = () => {
    const { fetchRequest, dataStore } = useDataContext();
    const [fixedActivities1, setFixedActivities1] = useState([]);
    const [fixedActivities2, setFixedActivities2] = useState([]);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetchRequest();
        GetActivitiesByCity(mainCities[0].id, dataStore.language)
            .then(res => setFixedActivities1(res.data));
        GetActivitiesByCity(mainCities[1].id, dataStore.language)
            .then(res => setFixedActivities2(res.data));
        GetActivitiesByCity(
            cities.filter((city) => mainCities.indexOf(city.id) === -1).map(city => city.id),
            dataStore.language
        ).then(res => setActivities(res.data));
    }, [dataStore.language]);

  return (
    <div className={styles.div}>
      <div className={styles.global}>
        <div className={styles.imgDiv}>
          <Image
            src={
              "https://i.ibb.co/fC37R1m/davide-ragusa-Qb-Dkh-VZ80-To-unsplash.jpg%22%7D"
            }
            alt="welcome to sicily"
            width={1920}
            height={720}
            layout="responsive"
            placeholder="empty"
            priority
            className={styles.Hero_img}
          />

          <blockquote className={styles.quote}>
            {`"Io sono nato in Sicilia e lì l’uomo nasce isola nell’isola e rimane tale fino alla morte, anche vivendo lontano dall’aspra terra natìa circondata dal mare immenso e geloso"`}
            <br />
            {`- Luigi Pirandello`}
          </blockquote>
        </div>
        <h2 className={styles.title}>{"Our finds for you"}</h2>
        {dataStore.loading ? (
          <SkeletonLoading />
        ) : (
          <div className={styles.wrapper}>
            <h2 className={styles.cities}>{"Palermo"}</h2>
            <ExpCard result={fixedActivities1} />
            <h2 className={styles.cities}>{"Catania"}</h2>
            <ExpCard result={fixedActivities2} />
            <div className={styles.lastSlide}>
              <h2 className={styles.cities}>{"Other cities"}</h2>
              <ExpCard result={activities} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experiences;
