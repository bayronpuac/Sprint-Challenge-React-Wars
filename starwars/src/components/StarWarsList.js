import React from "react";
import StarWarsCards from "./StarWarsCards";

export default function StarWarsList(props) {


  return (
      props.characters.map(character => {
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
