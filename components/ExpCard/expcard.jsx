import { useUserContext } from "../../context/UserContext/userContext";
import { useRef } from "react";
import Arrows from "../Arrows";
import Link from "next/link";
import styles from "./index.module.scss";


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
              onClick={() => handleClickOnCard(single)}
            >
              <div className={styles.wrapImgText}>
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
                  <h2 className={styles.card_title}>
                    {single.title.split(" ").slice(0, 20).join(" ") + "..."}
                  </h2>
                  <p className={styles.desc}>{single.description}</p>
                </div>
              </div>
              <div className={styles.wrapSubItems}>
                <div className={styles.cartDiv}>
                  <button className={styles.btnCart}>
                    <a>
                      <p>Add to Cart</p>
                    </a>
                  </button>
                </div>
                <div className={styles.tags}>
                  {single.verticals.map((item) => (
                    <div className={styles.slug_item} key={item.id}>
                      {`${item.name}`}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ExpCard;
