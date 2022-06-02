import { useEffect, useState } from 'react';
import { useDataContext } from '../../context/DataContext/dataContext';
import Card from "../Card";
import styles from './index.module.scss';

const Cardlist = () => {
    const { dataStore } = useDataContext();
    const activities = [dataStore.activities]
    const [classes, setClasses] = useState(false);

    useEffect(() => {
        setClasses((prev) => !prev)

    },[dataStore.activities])

    const arr = classes === true ? styles.title : styles.hide;
    
    console.log(classes)
    

    return (
        <div>
            <h2 className={arr}>{"Here's your results:"}</h2>
            <div className={styles.card_wrapper}>
                {activities && activities.map((card, index) => (
                    <Card cards={card} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Cardlist;