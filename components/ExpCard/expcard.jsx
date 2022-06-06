import Arrows from '../Arrows';
import { useRef } from 'react';
import { useDataContext } from '../../context/DataContext/dataContext';
import styles from './index.module.scss';

const ExpCard = ( props ) => {

    const results = props.results;

    const scrl = useRef(null);
    const slide = (cardWidth = 200) => {
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
                {results && results.map((single, index) => (
                    <div className={styles.cards} key={index}>
                        <img className={styles.card_img}
                            src={single.cover_image_url}
                            alt={single.title}
                        />
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