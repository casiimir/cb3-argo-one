import { useState, useEffect } from "react";

const CITY_URL = `https://api.musement.com/api/v3/cities/`;

const CITIES_CATEGORY_URL = (cityId) =>
  `https://api.musement.com/api/v3/cities/${cityId}/categories?`;

const ACTIVITY_BY_UUID = "https://api.musement.com/api/v3/activities/";

const AVAILABLE_ACTIVITY_URL = `https://api.musement.com/api/v3/activities?`;

export const http = async (APIurl, resource = "", options) => {
  const result = await fetch(`${APIurl}${resource}`, options);
  if (result.status >= 200 && result.status <= 299) {
    return await result.json();
  } else {
    throw new Error("qualcosa è andato storto");
  }
};

const CategoryOptions = () =>
  new URLSearchParams({
    //coordinates: `${latLon}`,
    limit: "8",
    offset: "0",
    prioritized_country: "1",
    prioritized_country_cities_limit: "1",
  }).toString();

export const GetCategories = async (cityId) => {
  const result = await fetch(CITIES_CATEGORY_URL(cityId), CategoryOptions, {
    method: "GET",
    headers: {
      "Accept-Language": "it",
      "X-Musement-Application": "string",
      "X-Musement-Market": "us",
      "X-Musement-Version": "3.4.0",
    },
  });
  return await result.json();
};

const ActivityOption = (coord, codeType, date) =>
  new URLSearchParams({
    available_from: date[0],
    available_language_in: "en,it",
    available_to: date[1],
    category_in: codeType,
    city_in: "0",
    coordinates: coord,
    country_in: "IT,US",
    //default_price_range: '0,34.23',
    distance: "30KM",
    //discounted: 'NO',
    //duration_range: '2,8',
    //extend_content_fields: 'AUTO',
    //extend_other_languages: 'AUTO',
    //feature_in: 'free,skip',
    //fuzziness_level: 'AUTO',
    //include_facets: 'feature,service',
    limit: "15",
    offset: "0",
    //pickup_in: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
    //preferred_seller_boost: '1000',
    //preferred_seller_code: 'Direct',
    //seller_in: 'Direct',
    //text: "string",
    //text_operator: "AND",
    // service_in: 'pick-up,pet-friendly',
    sort_by: "distance",
    //temporary: 'NO',
    //venue_in: '0',
    //vertical_in: codeType,
    //zero_terms_query: 'NONE'
  }).toString();

const ExperienceOption = (cityIn) =>
  new URLSearchParams({
    //available_from: date[0],
    available_language_in: "en,it",
    //available_to: date[1],
    //category_in: codeType,
    city_in: cityIn,
    //coordinates: coord,
    country_in: "IT,US",
    //default_price_range: '0,34.23',
    //distance: "30KM",
    //discounted: 'NO',
    //duration_range: '2,8',
    //extend_content_fields: 'AUTO',
    //extend_other_languages: 'AUTO',
    //feature_in: 'free,skip',
    //fuzziness_level: 'AUTO',
    //include_facets: 'feature,service',
    limit: "15",
    offset: "0",
    //pickup_in: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
    //preferred_seller_boost: '1000',
    //preferred_seller_code: 'Direct',
    //seller_in: 'Direct',
    //text: "string",
    //text_operator: "AND",
    // service_in: 'pick-up,pet-friendly',
    sort_by: "relevance",
    //temporary: 'NO',
    //venue_in: '0',
    //vertical_in: codeType,
    //zero_terms_query: 'NONE'
  }).toString();

export const GetCityById = (resource) =>
  http(CITY_URL, resource, {
    method: "GET",
    headers: {
      "Accept-Language": "it",
      "X-Musement-Application": "string",
      "X-Musement-Market": "us",
      "X-Musement-Version": "3.4.0",
    },
  });

export const GetAvailableActivity = (coord, codeType, date) =>
  http(AVAILABLE_ACTIVITY_URL, ActivityOption(coord, codeType, date), {
    method: "GET",
    headers: {
      "Accept-Language": "it",
      "X-Musement-Application": "string",
      "X-Musement-Market": "us",
      "X-Musement-Version": "3.4.0",
    },
  });

export const GetActivitiesByCity = (cityIn) =>
  http(AVAILABLE_ACTIVITY_URL, ExperienceOption(cityIn), {
    method: "GET",
    headers: {
      "Accept-Language": "it",
      "X-Musement-Application": "string",
      "X-Musement-Market": "us",
      "X-Musement-Version": "3.4.0",
    },
  });

export const GetActivitiesByUuid = (ActivityUuid) =>
  http(ACTIVITY_BY_UUID, ActivityUuid, {
    method: "GET",
    headers: {
      "Accept-Language": "it",
      "X-Musement-Application": "string",
      "X-Musement-Market": "us",
      "X-Musement-Version": "3.4.0",
    },
  });

export const setFormattingLocalDate = (setStateCallBack) => {
  const ISOdate = new Date();
  const date = ISOdate.toISOString().split("T");
  const day = `0${date[0].split("-")[2]}`;
  const month = date[0].split("-")[1];
  const year = date[0].split("-")[0];
  const yearMonth = date[0].split("-")[0] + "-" + date[0].split("-")[1];
  setStateCallBack([{ fullDate: date[0], day: day, month: month, year: year }]);
};

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};
