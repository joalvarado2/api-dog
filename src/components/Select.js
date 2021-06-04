import React, { useState, useEffect } from "react";
import getBreeds from "../Helpers/GetBreeds"
import Error from "./Error";

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
  const [error, setError] = useState(null);

  useEffect(() => {
    updateBreeds();
  },[])

  const updateBreeds = () => {
      getBreeds()
        .then((newBreeds) => {
            setBreeds(newBreeds)
        })
        .catch((error) => {
          console.log(error)
          setError("Error al cargar las razas")
        })
  }

  return (
    <>
    <select  onChange={(e) => updateDog(e.target.value)}>
    <option>-- Seleccione --</option>
      {breeds.map((dog) => (
        <option value={dog.id} key={dog.id}>
          {dog.name}
        </option>
      ))}
    </select>
    {error ? <Error error={error}/> : null}
    </>
  );
};

export default Select;
