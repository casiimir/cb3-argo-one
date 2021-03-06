/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useDataContext } from "../../context/DataContext/dataContext";
import { useUserContext } from "../../context/UserContext/userContext";
import Translator from "../Translator";

import styles from "./index.module.scss";

const Card = ({ card }) => {
  const { storeItemsOnLocal, setRefreshCartBadge, setSelectedActivityByUuid } = useUserContext();
  const { dataStore, updateActivityDataByUuid } = useDataContext();

  const handleClickOnCard = (ActivityUuiD) => {
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

  return (
    
      <div className={styles.cards} onClick={() => handleClickOnCard(card)}>
        <div className={styles.wrapImgText}>
          <Link href={`/detail/${card.slug_id}?uuid=${card.uuid}`}>
            <a>
              
              <img
                className={styles.card_img}
                src={
                  card.cover_image_url.split("?")[0] +
                  "?q=100&fm=jpg&fit=crop&w=1280&h=720"
                }
                alt={card.title}
              />
            </a>
          </Link>
          <div className={styles.text}>
            <h2 className={styles.card_title}>{card.title.split(" ").slice(0, 20).join(" ") + "..."}</h2>
            <p className={styles.desc}>{card.description}</p>
          </div>
        </div>
        <div className={styles.wrapSubItems}>
          <div className={styles.cartDiv}>
            <button className={styles.btnCart} onClick={() => handleAddToCart(card.title, card.retail_price.formatted_value, card.cover_image_url )} >
              <a>
                <p>{<Translator word="add to cart" type="fwupper" />}</p>
              </a>
            </button>
          </div>
          <div className={styles.tags}>
            {card.verticals.map((item, index) => (
              index === 0 ?
                <div className={styles.slug_item} key={item.id}>
                  {`${item.name}`}
                </div>
                : ""
            ))}
          </div>
        </div>
      </div>
  );
};

export default Card;