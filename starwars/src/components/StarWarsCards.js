// import React from 'react';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';

// const StarWarsCards = (props) => {
//   return (
//     <div>
//       <Card>
//         {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
//         <CardBody>
//           <CardTitle>Name: {props.name}</CardTitle>
//           <CardSubtitle>Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };




// export default StarWarsCards

import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #99f3eb;
  color: black;
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
`;
const NASAImg = styled.img`
  width: 400px;
  height: 250px;
  object-fit: scale;
  flex-shrink: 2;
`;
const StarWarsCards = props => {
  return (
    <Card >
      {/* <NASAImg alt="random Cosmos" src={props.img} /> */}
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