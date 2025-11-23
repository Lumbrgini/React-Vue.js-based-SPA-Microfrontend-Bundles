import React from "react";
import { HotelCard } from "./hotelCard";

const hotels = [
    {
        id: 1,
        name: "INNs Holz",
        image: "",
        location: "Schöneben",
        price: 130,
        rating: 4.9
    }, 
    {
        id: 2,
        name: "Falkensteiner Hotel Bad",
        image: "",
        location: "Leonfelden",
        price: 170,
        rating: 4.4
    },
    {
        id: 3,
        name: "Trans World Hotel Donauwelle",
        image: "",
        location: "Linz",
        price: 73,
        rating: 4.0
    }
]

export function HotelCardList(){
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
                />
            ))};
        </div>
    );
}