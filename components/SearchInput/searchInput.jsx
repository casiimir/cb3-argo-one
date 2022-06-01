import React from "react";
import { useState, useEffect } from "react";
import {
  GetCityById,
  GET_ACTIVITY,
  GetAvaiableActivity,
  GetCategories,
  setFormattingLocalDate,
} from "../../utils/utils";

import { cities, categories } from "../../utils/data.js";

import OptionGroup from "../OptionGroup";
import DatePicker from "../DatePicker";

import styles from "./styles.module.scss";

const SearchInput = (props) => {
  const [lat_lon, setLat_lon] = useState([38.114, 13.355]);
  const [actualDate, SetActualDate] = useState((date) => [
    { fullDate: date, day: date, month: date },
  ]);
  const [selectedDateRange, setSelectedDateRange] = useState((e) => [
    { date_to: e, date_from: e },
  ]);
  const [cityInfo, setCityInfo] = useState((e) => [
    { cityData: e, cityEvent: e },
  ]);
  const [activitiesInfo, setActivitiesInfo] = useState((date) => [
    { activities: categories, selectedActivity: date },
  ]);

  //handling function on cities select
  const handleClickOnCities = async (e) => {
    const value = e.target.value;
    const IDdata = await GetCategories(value);
    const cityData = await GetCityById(value);
    const verticals = await IDdata.map((type) => type);
    setActivitiesInfo((prev) => [
      { activities: verticals, selectedActivity: prev[0].selectedActivity },
    ]);
    setLat_lon([cityData.latitude, cityData.longitude]);
    setCityInfo([{ cityData: cityData }]);
  };

  useEffect(() => {
    props.function(lat_lon)
  },[lat_lon])

  //handling function on tipology select
  const handleClickOnTipology = async (e) => {
    const value = e.target.value;
    setActivitiesInfo((prev) => [
      { activities: prev[0].activities, selectedActivity: value },
    ]);
  };

  const handleDateToPick = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setSelectedDateRange((prev) => [
      { date_to: value, date_from: prev[0].date_from },
    ]);
  };
  const handleDateFromPick = (e) => {
    const value = e.target.value;
    setSelectedDateRange((prev) => [
      { date_to: prev[0].date_to, date_from: value },
    ]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await GetAvaiableActivity(
      lat_lon,
      activitiesInfo[0].selectedActivity,
      selectedDateRange
    );
    setCityInfo((prev) => [{ cityData: prev[0].cityData, cityEvent: result }]);
    // i dati escono da qui
    console.log(activitiesInfo.selectedActivity, result);
  };

  useEffect(() => {
    setFormattingLocalDate(SetActualDate);
  }, []);

  return (
    <div className={styles.Container}>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <OptionGroup
          data={cities}
          onChangeFn={handleClickOnCities}
          typeValue="cities"
          defaultValue="Select cities"
          textValue="Select a city to Start"
        />
        <OptionGroup
          data={activitiesInfo[0].activities}
          onChangeFn={handleClickOnTipology}
          typeValue="tipology"
          defaultValue="Select activities"
          textValue="Select an activities in zone"
        />
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
