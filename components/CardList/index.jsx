
import { useDataContext } from '../../context/DataContext/dataContext';
import Card from "../Card";
import styles from './index.module.scss';

const Cardlist = () => {
    const { dataStore } = useDataContext();
    const activities = [dataStore.activities]

    const classes = dataStore.setControl === true ? styles.title : styles.hide;

    return (
        <div>
            <h2 className={classes}>{"Here's your results:"}</h2>
            <div className={styles.card_wrapper}>
                {activities && activities.map((card, index) => (
                    <Card cards={card} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Cardlist;