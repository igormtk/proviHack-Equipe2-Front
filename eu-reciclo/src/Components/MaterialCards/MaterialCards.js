import React from "react";
import { Card, CardIcon } from "./MaterialCardsStyle";

const MaterialCard = (props) => {
  return (
    <Card href={props.link} target="_blank">
      <CardIcon src={props.icon} alt="material" />
      <h2>{props.name}</h2>
    </Card>
  );
};

export default MaterialCard;
