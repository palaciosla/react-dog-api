import React, { useState, useEffect } from "react";
import getBreeds from "../helpers/getBreeds";
import Error from "./Error";

const initialBreeds = [
  { id: 1, name: "Boxer" },
  { id: 2, name: "Caniche" },
  { id: 3, name: "Labrador" },
  { id: 4, name: "Salchicha" },
];

const Select = ({ updateDog }) => {
  const [breeds, setBreeds] = useState(initialBreeds);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    setError(null);
    getBreeds()
      .then((newBreeds) => setBreeds(newBreeds))
      .catch((error) => {
        console.log(error);
        setError("Error al cargar las razas.");
      });
  };

  return (
    <>
      <select onChange={(e) => updateDog(e.target.value)}>
        <option>Seleccione</option>
        {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
      {error && <Error error={error} />}
    </>
  );
};

export default Select;
