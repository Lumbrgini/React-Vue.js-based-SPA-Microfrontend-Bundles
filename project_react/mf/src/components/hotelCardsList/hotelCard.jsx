import React from "react";
import "./hotelCard.css";

export function HotelCard({name, image, location, price, rating}) {
    return (
        <article className="hotelCard">
            <img src={image} alt="Hotel image"></img>
            <div className="hotelCard_body">
                <h3 className="hotelCard_name">{name}</h3>
                <p className="hotelCard_location">{location}</p>
                <p className="hotelCard__price">starts with {price}€</p>
                <p className="hotelCard_rating">{rating} Stars</p>
            </div>
        </article>
    )
}