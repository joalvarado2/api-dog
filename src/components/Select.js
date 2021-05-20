import React, { useState, useEffect } from "react";
import getBreeds from "../Helpers/GetBreeds"

const initialBreeds = [
    {
      id: "1",
      name: "Boxer",
    },
    {
      id: "2",
      name: "Husky",
    },
  ];

const Select = ({updateDog}) => {

  const [breeds, setBreeds] = useState(initialBreeds);

  useEffect(() => {
    updateBreeds();
  },[])

  const updateBreeds = () => {
      getBreeds()
        .then((newBreeds) => {
            setBreeds(newBreeds)
        })
  }

  return (
    <select  onChange={(e) => updateDog(e.target.value)}>
    <option>-- Seleccione --</option>
      {breeds.map((dog) => (
        <option value={dog.id} key={dog.id}>
          {dog.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
