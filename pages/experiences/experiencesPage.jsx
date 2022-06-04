
import Card from '../../components/Card';
import { useDataContext } from '../../context/DataContext/dataContext';
import styles from './index.module.scss'

const Experiences = () => {
    const { dataStore } = useDataContext();
    const experiences = dataStore.experiences.data;


    return (
        <>
            <h2 className={styles.title}>{"Here's some of the best experiences in"} <span className={styles.span}>Tri</span>{"Sicily!"}</h2>
            <div className={styles.wrapper}>
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