import React, {useState} from "react";
import "./hotelCard.css";

export function HotelCard({name, image, location, price, rating, onAddFavorite}) {

    const [text, setText] = useState(false);
    
    const toggleText = () =>{
        const newText = text === false? true : false;
        setText(newText);
    }
    
    return (
        <article className="hotelCard">
            <div className="hotelCard_imageWrapper">
                <img src={image} alt="Hotel image"></img>
            </div>
            <div className="hotelCard_body">
                <h3 className="hotelCard_name">{name}</h3>
                <p className="hotelCard_location">{location}</p>
                <p className="hotelCard_price">starts with {price}€</p>
                <p className="hotelCard_rating">{rating} Stars</p>
            </div>

            <button onClick={() => {
                onAddFavorite(name);
                toggleText();
            }} className="addFavBtn">
                {text === true? 'Remove from ': 'Add to '} Favorites
            </button>
        </article>
    )
}