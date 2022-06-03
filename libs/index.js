const baseURL = "https://sandbox.musement.com/api/v3/cities";

const musApi = "https://api.musement.com/api/v3/cities";
const query = new URLSearchParams({ limit: "15" }).toString();

const getActivitiesInCity = async (cityId) => {
  const res = await fetch(`${baseURL}/${cityId}/` + "activities", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status >= 200 && res.status <= 299) {
    return await res.json();
  }
};

const getCategoriesForCity = async (cityId) => {
  const res = await fetch(`${musApi}/${cityId}/categories/?${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status >= 200 && res.status <= 299) {
    return await res.json();
  }
};

export { getActivitiesInCity, getCategoriesForCity };
