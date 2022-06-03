
import { useRef } from 'react';
import Arrows from '../../components/Arrows';
import { useDataContext } from '../../context/DataContext/dataContext';
import styles from './index.module.scss'

const Experiences = () => {
    const { dataStore } = useDataContext();
    const experiences = dataStore.experiences;

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
            <h2 className={styles.title}>{"Here's some of the best experiences in"} <span className={styles.span}>Tri</span>{"cily!"}</h2>
            <div className={styles.wrapper} ref={scrl}>
                {experiences && experiences.map((single, index) => (
                    <div className={styles.cards} key={index}>
                        <img className={styles.card_img}
                            src={single.cover_image_url}
                            alt={single.title}
                        />
                        <div className={styles.text}>
                            <h2 className={styles.card_title}>{single.title}</h2>
                            {/* <p className={styles.desc}>{single.description}</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Experiences;