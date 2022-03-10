const getDogs = async (breedId) => {
  const URL =
    !breedId || breedId === 0
      ? "https://api.thedogapi.com/v1/images/search"
      : `https://api.TheDogAPI.com/v1/images/search?breed_ids=${breedId}`;

  const res = await fetch(URL);
  const data = await res.json();

  const dog = {
    image: data[0].url,
    breed: {
      id: !breedId ? 0 : data[0].breeds.length === 0 ? 0 : data[0].breeds[0].id,
      name: !breedId ? " Perrito Random 🐶" : data[0].breeds[0].name,
    },
  };

  return dog;
};

export default getDogs;
