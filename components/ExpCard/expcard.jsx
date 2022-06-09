import Arrows from "../Arrows";
import { useRef } from "react";
import { useDataContext } from "../../context/DataContext/dataContext";
import styles from "./index.module.scss";
import Link from "next/link";
import { useUserContext } from "../../context/UserContext/userContext";

const ExpCard = ({ result }) => {
  const { setSelectedActivityByUuid } = useUserContext();
  const handleClickOnCard = (ActivityUuiD) => {
    console.log(ActivityUuiD);
    setSelectedActivityByUuid(ActivityUuiD);
  };

  const data = result;

  const scrl = useRef(null);
  const slide = (cardWidth = 350) => {
    const numberVisibleCard = Math.floor(scrl.current.offsetWidth / cardWidth);
    return numberVisibleCard * cardWidth;
  };

  return (
    <>
      <div className={styles.arrow_div}>
        <Arrows
          dx={() => (scrl.current.scrollLeft += slide())}
          sx={() => (scrl.current.scrollLeft += -1 * slide())}
        />
      </div>
      <div className={styles.wrapper} ref={scrl}>
        {data &&
          data.map((single, index) => (
            <div
              className={styles.cards}
              key={index}
              onClick={() => handleClickOnCard(single.uuid)}
            >
              <Link href={`/detail/${single.slug_id}?uuid=${single.uuid}`}>
                <a>
                  <img
                    className={styles.card_img}
                    src={
                      single.cover_image_url.split("?")[0] +
                      "?q=100&fm=jpg&fit=crop&w=1280&h=720"
                    }
                    alt={single.title}
                  />
                </a>
              </Link>

              <div className={styles.text}>
                <h2 className={styles.card_title}>{single.title}</h2>
                <p className={styles.desc}>{single.description}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ExpCard;
