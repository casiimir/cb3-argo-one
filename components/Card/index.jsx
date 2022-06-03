import styles from './index.module.scss';

const Card = ({cards}) => {

    const card = cards.data;
    
    return (
        <>
            {card && card.map((single, index) => (
                <div className={styles.cards} key={index}>
                    <img className={styles.card_img}
                        src={single.cover_image_url}
                        alt={single.title}
                    />
                    <div className={styles.text}>
                        <h2 className={styles.title}>{single.title}</h2>
                        <p className={styles.desc}>{single.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card;