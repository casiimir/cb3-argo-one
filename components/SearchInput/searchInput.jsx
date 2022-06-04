import React from "react";
import { useState, useEffect } from "react";
import { setFormattingLocalDate } from "../../utils/utils";

import { useDataContext } from "../../context/DataContext/dataContext";

import { cities } from "../../utils/data.js";

import OptionGroup from "../OptionGroup";
import DatePicker from "../DatePicker";
import Alert from "../Alert";

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
    const sentinel = event.target.value === "unselected";
    if (sentinel) {
      setAlert((prev) => !prev);
    } else {
      updateCategoriesData(event.target.value);
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
      selectedDateRange
    );
    // i dati escono da qui e li trovi in dataStore nel context
  };

  useEffect(() => {
    setFormattingLocalDate(SetActualDate);
  }, []);

  return (
    <div className={styles.Filter_Container}>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <OptionGroup
          data={cities}
          onChangeFn={handleClickOnCities}
          typeValue="cities"
          defaultText="Select cities"
          textValue="Select a city to Start"
          defaultValue="unselected"
        />

        <OptionGroup
          data={dataStore.categories}
          onChangeFn={handleClickOnTipology}
          typeValue="tipology"
          defaultText="Select activities"
          textValue="Select an activities in zone"
        />

        {alert && (
          <div className={styles.Alert}>
            <Alert
              text="Select a cities first !"
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

        <input className={styles.Button} type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchInput;
