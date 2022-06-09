import { useDataContext } from "../../context/DataContext/dataContext";
import { useEffect, useState } from "react";

const Translator = ({ word, type = '' }) => {
    const { dataStore } = useDataContext();
    const [words, setWords] = useState([]);

    const loadLanguageEntries = (lang) => {
        let data = require(`../../utils/languages/${lang}.json`);
        return data;
    }

    const translate = (key) => {
        return typeof words[key] !== "undefined" ? words[key] : '';
    }

    const transform = (str, type) => {
        if (typeof str === "undefined") {
            return '';
        }

        switch (type) {
            case 'upper':
                return str.toUpperCase();
            case 'lower':
                return str.toLowerCase();
            case 'fwupper':
                return str.charAt(0).toUpperCase() + str.slice(1);
            default:
                return str;
        }
    }

    useEffect(() => {
        setWords(loadLanguageEntries(dataStore.language))
    }, [dataStore.language])


    return (
        <>
            {transform(translate(word), type)}
        </>
    );
}

export default Translator;