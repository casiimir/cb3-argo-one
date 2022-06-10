import React from "react";
import { useState, useEffect } from "react";
import { setFormattingLocalDate } from "../../utils/utils";
import { useDataContext } from "../../context/DataContext/dataContext";
import { cities } from "../../utils/data.js";
import OptionGroup from "../OptionGroup";
import DatePicker from "../DatePicker";
import Alert from "../Alert";
import Translator from "../Translator";
import styles from "./styles.module.scss";

const SearchInput = () => {

	const {
		dataStore,
		updateCategoriesData,
		updateCityData,
		updateActivitiesData,
		setSelectedCategory,
		setDateTo,
		setDateFrom,
	} = useDataContext();

	const [actualDate, SetActualDate] = useState((date) => [
		{ fullDate: date, day: date, month: date },
	]);

	const [alert, setAlert] = useState(false);

	//handling function on cities select
	const handleClickOnCities = async (event) => {
		localStorage.setItem('language', 'it');
		const sentinel = event.target.value === "unselected";
		if (sentinel) {
			setAlert((prev) => !prev);
		} else {
			console.log(dataStore.language)
			updateCategoriesData(event.target.value, dataStore.language);
			updateCityData(event.target.value);
		}
	};

	//handling function on tipology select
	const handleClickOnTipology = async (event) => {
		const sentinel = event.target.value === "null";
		if (sentinel) {
			setAlert((prev) => !prev);
		} else {
			setSelectedCategory(event.target.value);
		}
	};

	const handleDateToPick = (event) => {
		setDateTo(event.target.value);
	};
	const handleDateFromPick = (event) => {
		setDateFrom(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const selectedDateRange = [dataStore.date_to, dataStore.date_from];

		updateActivitiesData(
			dataStore.latLon,
			dataStore.selectedCategory,
			selectedDateRange, 
		);
		// i dati escono da qui e li trovi in dataStore nel context
	};

	useEffect(() => {
		setFormattingLocalDate(SetActualDate);
	}, []);
	
	useEffect(() => {
		if (dataStore.cityData !== null) {
			updateCategoriesData(dataStore.cityData.id, dataStore.language);
		}
	}, [dataStore.language]);

	return (
		<div className={styles.Filter_Container}>
			<h2 className={styles.Title}>{<Translator word="looking for an experience"/>}</h2>
			<form className={styles.Form} onSubmit={handleSubmit}>
				<OptionGroup
					data={cities}
					onChangeFn={handleClickOnCities}
					typeValue="cities"
					defaultText={<Translator word="select cities" type="fwupper" />}
					textValue="Select a city to start"
					defaultValue="unselected"
				/>
				<OptionGroup
					data={dataStore.categories}
					onChangeFn={handleClickOnTipology}
					typeValue="tipology"
					defaultText={<Translator word="select your experience" type="fwupper" />}
					textValue="Select an activitiy"
				/>
				{alert && (
					<div className={styles.Alert}>
						<Alert
							text="Please, select an options first"
							value={alert}
							setFn={setAlert}
							time={3000}
							classStyle="SearchBox"
						/>
					</div>
				)}
				<DatePicker
					firstDateFn={handleDateToPick}
					secondDateFn={handleDateFromPick}
				/>
				<button className={styles.Button} type="submit" value="Search">
				{<Translator word="search" type="fwupper" />}
				</button>
			</form>
		</div>
	);
};

export default SearchInput;