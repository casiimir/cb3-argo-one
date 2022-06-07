import { useState, useEffect } from 'react';
import { useDataContext } from '../../context/DataContext/dataContext';
import ExpCard from '../../components/ExpCard';
import styles from './index.module.scss'

const Experiences = () => {
    const { dataStore } = useDataContext();
    const city1 = dataStore.experiences.cities.data;
    const city2 = dataStore.experiences.city1.data;
    const city3 = dataStore.experiences.city2.data;

    const [slide1, setSlide1] = useState([])
    const [slide2, setSlide2] = useState([])
    const [slide3, setSlide3] = useState([])

    useEffect(() => {
        setSlide1(city1);
        setSlide2(city2);
        setSlide3(city3);
    }, [dataStore.experiences.cities.data])

    return (
        <div className={styles.div}>
            <h2 className={styles.title}>{"Here's the best experience in Tricily!"}</h2>
            <div className={styles.global}>
                <div className={styles.wrapper}>
                    <ExpCard result={slide3}/>
                    <ExpCard result={slide1}/>
                    <ExpCard result={slide2}/>
                </div>
            </div>
        </div>
    )
}

export default Experiences;