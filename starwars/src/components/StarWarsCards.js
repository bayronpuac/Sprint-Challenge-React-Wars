
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #99f3eb;
  color: black;
  width: 450px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
  margin: 10px; 
`;
const NASAImg = styled.img`
  width: 450px;
  height: 250px;
  object-fit: scale;
  flex-shrink: 2;
`;
const StarWarsCards = props => {
  return (
    <Card >
      <NASAImg alt="Random Picture" src={`https://source.unsplash.com/random`} />
      <div>
        <h2>{props.name}</h2> 
        <p>{props.birth}</p>
        <p>{props.height}</p>
        <p>{props.skin}</p>

      </div>
     
    </Card>
  );
};
export default StarWarsCards;