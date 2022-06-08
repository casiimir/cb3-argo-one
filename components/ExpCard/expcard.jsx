import Arrows from '../Arrows';
import { useRef } from 'react';
import { useModalContext } from '../../context/ModalContext/modalContext';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import styles from './index.module.scss';

const ExpCard = ({ result }) => {
    const data = result;

    const { setOpenModal } = useModalContext();
    const handleClickOnCard = (cardData) => {
        setOpenModal(cardData, true);
    };

    const scrl = useRef(null);
    const slide = (cardWidth = 510) => {
        const numberVisibleCard = Math.floor(scrl.current.offsetWidth / cardWidth);
        return numberVisibleCard * cardWidth;
    };

    const addToCart = () => {
        storeItemsOnLocal(
            activitiesData.title,
            activitiesData.retail_price.formatted_value,
            activitiesData.cover_image_url
        );
    }

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
                            <Link href={`/detail/${single.slug_id}`}><a>
                                <img className={styles.card_img}
                                    src={single.cover_image_url.split("?")[0] + "?q=100&fm=jpg&fit=crop&w=1280&h=720"}
                                    alt={single.title}
                                />
                            </a></Link>
                            <div className={styles.text}>
                                <h2 className={styles.card_title}>{single.title.split(" ").slice(0, 20).join(" ") + "..."}</h2>
                                <p className={styles.desc}>{single.description}</p>
                            </div>
                        </div>
                        <div className={styles.wrapSubItems}>
                            <div className={styles.cartDiv}>
                                <p>Add to Cart</p>
                                <Link href="/cart" onClick={addToCart} >
                                    <a>
                                        <FaShoppingCart className={styles.cart} />
                                    </a>
                                </Link>
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
    )
}

export default ExpCard;