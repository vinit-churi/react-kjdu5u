import React from "react";
import { useQuery } from "react-query";



const Planets = () => {
  const { isLoading, error, data } = useQuery("planets", async () =>
    fetch("https://swapi.dev/api/planets/").then(res => res.json())
  );
  if (isLoading) return <h3>Loading...</h3>;

  if (error) return <h3>"An error has occurred: " + {error.message}</h3>;

  return (
    <>
      <div>
        <h3>Planets</h3>
        {console.log(data.results[0])}
        <div>{data.results.map((planet) => <p>{planet.name}</p>)}
        </div>
      </div>
    </>
  );
};

export default Planets;
