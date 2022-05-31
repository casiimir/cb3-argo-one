import { useState, useEffect } from "react";
import {getActivitiesInCity, getCategoriesForCity } from "../../libs";

import styles from './index.module.scss'

const Form = (props) => {
    const [city, setCity] = useState('24')
    const [categories, setCategories] = useState([]);

    const onDataSend = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        getCategoriesForCity(city).then((res) => {
            setCategories(res);
        });
    }, [city])

    return (
        <div className={styles.wrapper}>
            <form onSubmit={onDataSend} className={styles.form}>
                <label >Where do you want to go?</label>
                <select name="destination" id="destination" onChange={(e) => setCity(e.target.value)} >
                    <option value="0">Select a City</option>
                    <option value="24">Palermo</option>
                    <option value="15">Catania</option>
                    <option value="572">Messina</option>
                    <option value="147">Siracusa</option>
                    <option value="265">Agrigento</option>
                    <option value="147">Ragusa </option>
                </select>
                <label >What would you like to do?</label>
                <select name="category" id="category">
                    {categories && categories.map((category) => (
                        <option value={category.code} key={category.id}>{category.name}</option>
                    ))};
                </select>
                <label >How long do you want to stay?</label>
                <input type="submit" value="Search" />
            </form>
        </div>)
}

export default Form;
