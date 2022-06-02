
import Card from "../Card";
import styles from './index.module.scss';

const Cardlist = () => {


    return (
        <>
            <h2>Potrebbero interessarti anche..</h2>
            <div className={styles.card_wrapper} >
                {/* {cardData.map((card) => (
                    <Card card={card} key={card.uuid} />
                ))} */}
            </div>
        </>
    )
}

export default Cardlist;