import React from "react";

const Cards = props => (
    <div className="card">
        <div className="img-container">
        <img alt={props.name} src={props.image} />
        This is some text within a card body.
    </div>
    </div>
);

export default Cards;