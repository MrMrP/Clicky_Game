import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
        {props.card.map(item =>(
            <img alt={props.name} src={props.image} key={item.id}/>
        ))}
        
        </div>
        
        <div className="card-body">
        <ul className="card-text">
        <li>
        Name: {props.name}
        </li>
        </ul>
        </div>
        </div>
)
export default Card;