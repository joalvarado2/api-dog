import React from "react";
import Spinner from "./Spinner";

const Card = ({ dog, updateDog, loading }) => {
  if (loading) return <Spinner />;

  return (
    <div className="card bounce" onClick={() => updateDog(dog.breeds.id)}>
      <img src={dog.image} alt="dog" />

      <p>{dog.breeds.name}</p>
    </div>
  );
};

export default Card;
