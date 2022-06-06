import Arrows from '../Arrows';
import { useRef } from 'react';
import { useDataContext } from '../../context/DataContext/dataContext';
import styles from './index.module.scss';
import Link from 'next/link';
import { useModalContext } from '../../context/ModalContext/modalContext';

const ExpCard = ( {result} ) => {
    
    const { setOpenModal } = useModalContext();
    const handleClickOnCard = (cardData) => {
        setOpenModal(cardData, true);
      };

    const data = result;

    const scrl = useRef(null);
    const slide = (cardWidth = 450) => {
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
                        <Link href={`/detail/${single.slug_id}`}><a>
                        <img className={styles.card_img}
                            src={single.cover_image_url}
                            alt={single.title}
                        />
                        </a></Link>
                        <div className={styles.text}>
                            <h2 className={styles.card_title}>{single.title}</h2>
                            <p className={styles.desc}>{single.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ExpCard;