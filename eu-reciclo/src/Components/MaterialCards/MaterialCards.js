import React from "react"
import { Card, CardIcon, CardTitle } from "./MaterialCardsStyle";

const MaterialCard = (props) => {

    return (
        <Card onClick={props.link}>
            <a href={props.link}><CardIcon src={props.icon} alt="material"/></a>
            <a href={props.link}><h2>{props.name}</h2></a>
        </Card>
    )
}

export default MaterialCard;