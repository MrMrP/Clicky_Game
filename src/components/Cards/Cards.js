import React from "react";
import "./Cards.css";

const Cards = props => (
  <div className="card">
    <div className="img-container">
    <img className="image" alt={props.name} src= {props.image} onClick={() => props.cardPress(props.id)}
    />
    </div>
  </div>
)

export default Cards;
