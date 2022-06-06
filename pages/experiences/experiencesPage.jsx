import ExpCard from '../../components/ExpCard';
import styles from './index.module.scss'

const Experiences = () => {
    const { dataStore } = useDataContext();
    const experiences = dataStore.experiences;


    return (
        <>
            <div className={styles.global}>
                <div className={styles.wrapper}>
                    <ExpCard />
                    <ExpCard />
                    <ExpCard />
                </div>
            </div>
        </>
    )
}

export default Experiences;