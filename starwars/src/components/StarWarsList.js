import React, {useState, useEffect} from "react";
import StarWarsCards from "./StarWarsCards";
import axios from  "axios";

export default function StarWarsList() {

    const [name, setName] = useState([]);
    
    useEffect(() =>{
      axios 
      .get(`https://swapi.co/api/people/`)
      .then( res => {
          const people = res.data.results;
          console.log(people);
          setName(people)
      })
      .catch(error => {
          console.log("The data was not returned", error);
      });
  }, []);

  return (
      name.map(character => {
           return (
                <StarWarsCards
                  name={character.name}
                  birth={character.birth_year}
                  height={character.height}
                  skin={character.skin_color}
                />
            );
          })
  );
}
