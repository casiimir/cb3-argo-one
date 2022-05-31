const baseURL = "https://sandbox.musement.com/api/v3/cities";


const getCategoryWithCity = async (cityId = "24", categoryId = "193") => {
  const res = await fetch(`${baseURL}/${cityId}/categories/${categoryId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status >= 200 && res.status <= 299) {
    return await res.json();
  }
};

const getActiviesInCity = async (cityId) => {
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



export { getCategoryWithCity, getActiviesInCity }  