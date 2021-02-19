import React from "react";
import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/Planets/")
    .then(data => data.json())
    .catch(err => console.log(err));
  return res;
};

const Planets = () => {
  const { isLoading, error, data } = useQuery("planets", () =>
    fetch("http://swapi.dev/api/Planets/").then(res => res.json())
  );
  if (isLoading) return <h3>Loading...</h3>;

  if (error) return <h3>"An error has occurred: " + {error.message}</h3>;

  return (
    <>
      <div>
        <h3>Planets</h3>
      </div>
    </>
  );
};

export default Planets;
