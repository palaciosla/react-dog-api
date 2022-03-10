const getBreeds = async () => {
  const URL = "https://api.thedogapi.com/v1/breeds";

  const res = await fetch(URL);

  if (!res.ok) {
    const { url, status, statusText } = res;
    throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
  }

  const breeds = await res.json();

  return breeds;
};

export default getBreeds;
