/* eslint-disable @next/next/no-img-element */
import Arrows from "../Arrows";
import Link from "next/link";
import styles from "./index.module.scss";
import { useRef } from "react";
import { useUserContext } from "../../context/UserContext/userContext";
import { useDataContext } from "../../context/DataContext/dataContext";
import Translator from "../Translator";

const ExpCard = ({ result }) => {
  const { storeItemsOnLocal, setRefreshCartBadge, setSelectedActivityByUuid } = useUserContext();
  const { dataStore, updateActivityDataByUuid } = useDataContext();

  const handleClickOnCard = (ActivityUuiD) => {
    console.log(ActivityUuiD);
    setSelectedActivityByUuid(ActivityUuiD);
  };

  const handleAddToCart = (title, formatted_value, cover_image_url) => {
    storeItemsOnLocal(
      title,
      formatted_value,
      cover_image_url
    );
    setRefreshCartBadge();
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
        {data && data.map((single, index) => (
          <div className={styles.cards} key={index} onClick={() => handleClickOnCard(single)}>
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
                <h2 className={styles.card_title}>{single.title.split(" ").slice(0, 20).join(" ") + "..."}</h2>
                <p className={styles.desc}>{single.description}</p>
              </div>
            </div>
            <div className={styles.wrapSubItems}>
              <div className={styles.cartDiv}>
                <button className={styles.btnCart} onClick={() => handleAddToCart(single.title, single.retail_price.formatted_value, single.cover_image_url)} >
                  <a>
                    <p>{<Translator word="add to cart" type="fwupper" />}</p>
                  </a>
                </button>
              </div>
              <div className={styles.tags}>
                {single.verticals.map((item, index) => (
                  index === 0 ?
                    <div className={styles.slug_item} key={item.id}>
                      {`${item.name}`}
                    </div>
                    : ""
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default ExpCard;