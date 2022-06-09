import { useDataContext } from "../../context/DataContext/dataContext";

const Flag = () => {
    const { dataStore, setLanguage } = useDataContext();
    const lang = dataStore.language;

    return (
        <span>
            {
                lang === 'en-US'
                    ? <button onClick={() => setLanguage('it-IT')}>IT</button>
                    : <button onClick={() => setLanguage('en-US')}>EN</button>
            }
        </span>
    );
}

export default Flag;
