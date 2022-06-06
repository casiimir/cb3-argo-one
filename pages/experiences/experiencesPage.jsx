import { useState, useEffect } from 'react';
import ExpCard from '../../components/ExpCard';
import styles from './index.module.scss'

const Experiences = () => {
    const { dataStore } = useDataContext();

    const [palermo, setPalermo] = useState([]);
    const [catania, setCatania] = useState([]);
    const [messina, setMessina] = useState([]);

    useEffect(() => {

    })

    return (
        <>
        <h2 className={styles.title}>{"Here's the best experience in Tricily!"}</h2>
            <div className={styles.global}>
                <div className={styles.wrapper}>
                    <ExpCard />
                    <ExpCard />
                    <ExpCard />
                    <ExpCard />
                </div>
            </div>
        </>
    )
}

export default Experiences;