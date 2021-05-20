import React from "react";

const Card = ({ dog, updateDog, loading }) => {

    if(loading) return <h1>loading....</h1>

  return (
    <div className="card" onClick={() => updateDog(dog.breeds.id)}>
      <img src={dog.image} alt="dog" />

      <p>{dog.breeds.name}</p>
    </div>
  );
};

export default Card;
