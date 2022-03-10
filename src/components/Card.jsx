import React, { useState } from "react";
import Spinner from "./Spinner";

const Card = ({ dog, updateDog, isLoading }) => {
  if (isLoading) return <Spinner />;
  return (
    <div className="card" onClick={() => updateDog(dog.breed.id)}>
      <img src={dog.image || dog.url} alt="dog" />
      <p>{dog.breed.name}</p>
    </div>
  );
};

export default Card;
