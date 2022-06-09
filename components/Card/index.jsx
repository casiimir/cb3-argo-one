import Link from "next/link";
import { useUserContext } from "../../context/UserContext/userContext";

import styles from "./index.module.scss";

const Card = ({ cards }) => {
  const { setSelectedActivityByUuid } = useUserContext();
  const card = cards.data;

  const handleClickOnCard = (ActivityUuiD) => {
    setSelectedActivityByUuid(ActivityUuiD);
  };

  return (
    <>
      {card &&
        card.map((single, index) => (
          <div
            className={styles.cards}
            key={index}
            onClick={() => handleClickOnCard(single.uuid)}
          >
            <Link href={`/detail/${single.slug_id}?uuid=${single.uuid}`}>
              <a>
                <img
                  className={styles.card_img}
                  src={single.cover_image_url}
                  alt={single.title}
                />
              </a>
            </Link>
            <div className={styles.text}>
              <h2 className={styles.title}>
                {single.title.split(" ").slice(0, 4).join(" ") + "..."}
              </h2>
              <p className={styles.desc}>
                {single.description &&
                  single.description.split(" ").slice(0, 30).join(" ") + "..."}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;
