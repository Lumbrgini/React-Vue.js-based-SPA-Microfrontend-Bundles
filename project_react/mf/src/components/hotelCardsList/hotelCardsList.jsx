import React, { useState } from "react";
import { HotelCard } from "./hotelCard";
import "./hotelCardList.css"
import inns from "../../pictures/inns.png";
import falken from "../../pictures/falken.png";
import worldhotel from "../../pictures/worldhotel.png";
import boutique from "../../pictures/boutique.png";
import seehotel from "../../pictures/seehotel.png";
import parkhotel from "../../pictures/parkhotel.png";

const hotels = [
    {
        id: 1,
        name: "INNs Holz",
        image: inns,
        location: "4161 Ulrichsberg",
        price: 130,
        rating: 4.9
    }, 
    {
        id: 2,
        name: "Falkensteiner Hotel",
        image: falken,
        location: "4190 Bad Leonfelden",
        price: 170,
        rating: 4.4
    },
    {
        id: 3,
        name: "Trans World Hotel Donauwelle",
        image: worldhotel,
        location: "4020 Linz",
        price: 73,
        rating: 4.0
    },
    {
        id: 4,
        name: "Boutique Hotel Hauser",
        image: boutique,
        location: "4600 Wels",
        price: 111,
        rating: 4.7
    },
    {
        id: 5,
        name: "Seehotel im Weyer",
        image: seehotel,
        location: "4810 Gmunden",
        price: 142,
        rating: 4.9
    },
    {
        id: 6,
        name: "Parkhotel Branau",
        image: parkhotel,
        location: "5280 Branau am Inn",
        price: 80,
        rating: 4.0
    }

]

export function HotelCardList(){

    const [favorites, setFavorites] = useState([]);

    const handleAddToFavorites = (name) => {
        setFavorites(prev => {
            if (prev.includes(name)) {
                return prev.filter(item => item !== name);
            } else {
                return [...prev, name];
            }
        });
                
        };
    console.log(favorites.join(","));
    return (
        <div className="hotelCardList">
            {hotels.map((hotel) => (
                <HotelCard
                key={hotel.id}
                name={hotel.name}
                image={hotel.image}
                location={hotel.location}
                price={hotel.price}
                rating={hotel.rating}
                onAddFavorite={handleAddToFavorites} 
                />
            ))}
        </div>
    );
}
