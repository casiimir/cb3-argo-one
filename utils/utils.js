const http = async (APIurl, resource, options) => {
  const result = await fetch(`${APIurl}/${resource}`, options);
  const SUCCESS = result.status >= 200 && result.status <= 299;
  switch (result.status) {
    case SUCCESS:
      return await result.json();
    default:
  }
};
