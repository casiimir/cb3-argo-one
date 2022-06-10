import { useEffect } from "react";
import { useDataContext } from "../../context/DataContext/dataContext";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";
import Translator from "../../components/Translator";
import { useUserContext } from "../../context/UserContext/userContext";
import styles from "./index.module.scss";
import Link from "next/link";

const Detail = () => {
  
  const { storeItemsOnLocal, setRefreshCartBadge } = useUserContext();
  const { dataStore, updateActivityDataByUuid } = useDataContext();
  const { query } = useRouter();

  const handleAddToCart = () => {
    storeItemsOnLocal(
      dataStore.activity.title,
      dataStore.activity.retail_price.formatted_value,
      dataStore.activity.cover_image_url
    );
    setRefreshCartBadge();
  };

  useEffect(() => {
    query.uuid && updateActivityDataByUuid(query.uuid, dataStore.language);
    //eslint-disable-next-line
  }, [query.uuid, dataStore.language]);

  return (
    <div className={styles.global}>
      {dataStore.activity && (
        <div className={styles.eleniaèscarsaepurecretina}>
          <div className={styles.Modal_Wrapper}>
            <div className={styles.Actv_Image_Container}>
              <Image
                src={
                  dataStore.activity.cover_image_url.split("?")[0] +
                  "?q=100&fm=jpg&fit=crop&w=1920&h=1080"
                }
                alt="welcome to sicily"
                width={1200}
                height={720}
                layout="responsive"
                placeholder="empty"
                className={styles.Actv_Image}
              />
            </div>
            <div className={styles.Info_Container}>
              <h2 className={styles.Title}>{dataStore.activity.title}</h2>
              <p className={styles.Place}>
                <FaMapMarkerAlt />
                {dataStore.activity.city.name}
              </p>
              <div className={styles.Button_Container}>
                <button
                  className={styles.Button}
                  onClick={() => {
                    handleAddToCart();
                  }}
                >
                 {<Translator word="add to cart" type="fwupper"/>}
                </button>
                <Link href={`/experiences`}>
                  <button className={styles.Button}>{<Translator word="go back" type="fwupper"/>}</button>
                </Link>
                <button className={styles.Prices_p} disabled>
                  {dataStore.activity.retail_price.formatted_value}
                </button>
              </div>
            </div>
          </div>
          <div className={styles.sections}>
            <div className={styles.divAbout}>
              <p className={styles.About}>{dataStore.activity.about}</p>
            </div>
            <div className={styles.highlights}>
              <ul className={styles.highlights_ul}>
                {dataStore.activity.highlights.map((highlight, index) => (
                  <li className={styles.highlights_li} key={index}>
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className={styles.optionsDiv}>
                <ul className={styles.included_ul}>
                  <span className={styles.span_title}>
                  {<Translator word="included with this package" type="fwupper"/>}
                  </span>
                  {dataStore.activity.included.map((feat, index) => (
                    <li className={styles.included_li} key={index}>
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className={styles.lang_Container}>
                  <ul className={styles.lang_ul}>
                    <span className={styles.lang_title}>
                    {<Translator word="available languages" type="fwupper"/>}
                    </span>
                    {dataStore.activity.languages.map((lang) => (
                      <li className={styles.lang_li} key={lang.code}>
                        {lang.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {dataStore.activity.verticals.slice(0, 2).map((vert) => {
            <ul>
              <li key={vert.code}>{vert.name}</li>
            </ul>;
          })}
        </div>
      )}
    </div>
  );
};

export default Detail;
