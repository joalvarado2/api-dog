import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Error from "./components/Error";
import Select from "./components/Select";
import getDog from "./Helpers/GetDog"

const initialDog = {
  image: "https://www.semana.com/resizer/MqpyUr9Q2afxX3bCeHK5WV3E_sU=/1200x675/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/semana/RE55ORS5VRHPPLSJPA5LA3PBKY.jpg",
  breeds: {
    id: "1",
    name: "labrador",
  },
};

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  useEffect(()=> {
    updateDog()
  },[])

  const updateDog = (breedId) => {
    setLoading(true)
    getDog(breedId)
    .then((newDog) => {
      setDog(newDog)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setError("Error al cargar un perrito")
      setLoading(false)
    })
  }

  return (
    <div className="app">
      <Select updateDog = {updateDog}/>
      {error ? <Error error={error} /> : null}
      <Card dog = {dog} updateDog = {updateDog} loading={loading}/>
    </div>
  );
}

export default App;
