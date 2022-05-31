import { useState, useEffect } from "react";
import { getCategoryWithCity, getActiviesInCity } from "../../libs";

const Form = (props) => {
    const [city, setCity] = useState('')
    const [category, setCategory] = useState('')
    const [latitude, setLatitude] = useState("38.114");
    const [longitude, setLongitude] = useState("13.355");
    const [categoryCity, setCategoryCity] = useState("")
    const [query, setQuery] = useState("");

    const onDataSend = (e) => {
        e.preventDefault();
        getCategoryWithCity(city, category).then((res) => {
            setCategoryCity(res)
            setLatitude(res.city.latitude);
            setLongitude(res.city.longitude);
        });
        getActiviesInCity(city).then((res) => {
            setQuery(res);
        })
    };

    console.log(query)

    useEffect(() => {
        getCategoryWithCity();
        getActiviesInCity();
    }, [])

    useEffect(() => {
        props.fallback(latitude, longitude)
    }, [latitude, longitude])

    return (

        <form onSubmit={onDataSend}>
            <label >Choose your Destination:</label>
            <select name="destination" id="destination" onChange={(e) => setCity(e.target.value)} required>
                <option value="">Select a City</option>
                <option value="24">Palermo</option>
                <option value="15">Catania</option>
                <option value="572">Messina</option>
                <option value="147">Siracusa</option>
                <option value="265">Agrigento  </option>
                <option value="147">Ragusa </option>
            </select>
            <label >Choose your Category:</label>
            <select name="category" id="category" onChange={(e) => setCategory(e.target.value)} required>
                <option value="193">Shopping</option>
                <option value="221">Food & drink </option>
                <option value="195">Hiking & bike tours</option>
                <option value="202">Cooking classes</option>
                <option value="204">Wellness, fitness & spa </option>
                <option value="209">Attractions & guided tours  </option>
            </select>
            <select name="duration" id="duration" required>
                <option value="1 day">1 Day</option>
                <option value="2-3 days">2-3 days </option>
                <option value="4-5 days">4-5 days</option>
                <option value="1 week ">1 Week</option>
            </select>
            <input type="submit" value="Search" />
        </form>
    )
}

export default Form;
