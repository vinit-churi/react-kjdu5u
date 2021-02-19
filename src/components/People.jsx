import React from "react";
import { useQuery } from "react-query";



const People = () => {
  const { isLoading, error, data } = useQuery("people", async () =>
    fetch("https://swapi.dev/api/people/").then(res => res.json())
  ,{
    onSuccess: console.log('data fetched successfull')
  });
  if (isLoading) return <h3>Loading...</h3>;

  if (error) return <h3>"An error has occurred: " + {error.message}</h3>;

  return (
    <>
      <div>
        <h3>People</h3>
        <div>{data.results.map((people) => <p>{people.name}</p>)}
        </div>
      </div>
    </>
  );
};

export default People;
