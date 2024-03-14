import React from "react";

function Card(props) {
    return (
        <div className={`${props.class} card`}>
            <img className="icon" src={props.img} alt="icon of a car" />
            <h1 className="title">{props.title}</h1>
            <p className="description white">{props.description}</p>
            <button className="learn-more white" type="button">Learn More</button>
        </div>
    )
}

export default Card;