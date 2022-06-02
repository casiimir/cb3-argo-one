const CITY_URL = `https://api.musement.com/api/v3/cities/`;

const CITIES_ACTIVITY_URL = (cityId) =>
  `https://api.musement.com/api/v3/cities/${cityId}/activities?`;

const CITIES_CATEGORY_URL = (cityId) =>
  `https://api.musement.com/api/v3/cities/${cityId}/categories?`;

const AVAIABLE_ACTIVITY_URL = `https://api.musement.com/api/v3/activities?`;

export const http = async (APIurl, resource = "", options) => {
  const result = await fetch(`${APIurl}${resource}`, options);
  if (result.status >= 200 && result.status <= 299) {
    return await result.json();
  } else {
  

    throw new Error("qualcosa è andato storto");
  }
};

const GetCategoryOptions = () =>
  new URLSearchParams({
    //coordinates: `${latLon}`,
    limit: "8",
    offset: "0",
    prioritized_country: "1",
    prioritized_country_cities_limit: "1",
  }).toString();

export const GetCategories = async (cityId) => {
  const result = await fetch(CITIES_CATEGORY_URL(cityId), GetCategoryOptions, {
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

const GetActivityOption = (coord, codeType, date) =>
  new URLSearchParams({
    available_from: date[0],
    available_language_in: "en,it",
    available_to: date[1],
    category_in: codeType,
    //city_in: '0',
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

export const GET_ACTIVITY = (cityID, resource) =>
  http(CITIES_ACTIVITY_URL(cityID), resource, {
    method: "GET",
    headers: {
      "Accept-Language": "it",
      "X-Musement-Application": "string",
      "X-Musement-Market": "us",
      "X-Musement-Version": "3.4.0",
    },
  });

export const GetAvaiableActivity = (coord, codeType, date) =>
  http(AVAIABLE_ACTIVITY_URL, GetActivityOption(coord, codeType, date), {
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
