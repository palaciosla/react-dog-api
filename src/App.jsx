import { useState, useEffect } from "react";
import Card from "./components/Card";
import Error from "./components/Error";
import Select from "./components/Select";
import getDogs from "./helpers/getDogs";

const initialDog = {
  image: "https://cdn-icons-png.flaticon.com/512/1462/1462009.png",
  breed: {
    id: 0,
    name: " Perrito Random 🐶",
  },
};

function App() {
  const [dog, setDog] = useState(initialDog);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setIsLoading(true);
    getDogs(breedId)
      .then((randomDog) => setDog(randomDog))
      .catch((error) => {
        console.log(error);
        setError("Error al cargar los perros");
      })
      .finally(() => 
      setIsLoading(false))
  };

  return (
    <div className="app">
      <Select updateDog={updateDog} />
      {error && <Error error={error} />}
      <Card dog={dog} updateDog={updateDog} isLoading={isLoading} />
    </div>
  );
}

export default App;
