import React, { useEffect, useState } from "react";
import krampus from "../../pictures/krampus.jpg"
import ausstellung from "../../pictures/ausstellung.jpg"
import weihnachtsmarkt from "../../pictures/weihnachtsmarkt.jpg"
import techno from "../../pictures/techno.jpg"
import museum from "../../pictures/museum.jpg"
import gluh from "../../pictures/gluh.jpg"
import tech from "../../pictures/tech.jpg"
import gallery from "../../pictures/gallery.jpg"
import markt from "../../pictures/markt.jpg"
import ktm from "../../pictures/ktm.jpg"
import { EventCard } from "./eventCard";
import "./eventCardList.css"

const events = [
    {
        id: 1,
        name: "Krampuslauf Event",
        image: krampus,
        date: '13.12.2025',
        location: "Ulrichsberg",
        price: 5
    },
    {
        id: 1,
        name: "Christmas Show",
        image: ausstellung,
        date: '15.12.2025',
        location: "Ulrichsberg",
        price: 0
    },
    {
        id: 2,
        name: "Christmas Market",
        image: weihnachtsmarkt,
        date: '23.12.2025',
        location: "Bad Leonfelden",
        price: 0
    },
    {
        id: 3,
        name: "Techno in the Oldtown",
        image: techno,
        date: '21.12.2025',
        location: "Linz",
        price: 15
    },
    {
        id: 3,
        name: "Ars Electronica Center Tour",
        image: tech,
        date: '22.12.2025',
        location: "Linz",
        price: 10
    },
    {
        id: 4,
        name: "Beer Garden Advent",
        image: gluh,
        date: '19.12.2025',
        location: "Wels",
        price: 0
    },
    {
        id: 4,
        name: "City Museum Tour",
        image: museum,
        date: '22.12.2025',
        location: "Wels",
        price: 15
    },
    {
        id: 5,
        name: "Schwanthaler Gallery Tour",
        image: gallery,
        date: '20.12.2025',
        location: "Gmunden",
        price: 20
    },
    {
        id: 5,
        name: "Christmas Market",
        image: markt,
        date: '22.12.2025',
        location: "Gmunden",
        price: 0
    },
    {
        id: 6,
        name: "KTM Motohall Tour",
        image: ktm,
        date: '21.12.2025',
        location: "Branau am Inn",
        price: 10
    },
    
]

export function EventsCardList() {
    const [showEvents, setShowEvents] = useState([]);


    useEffect(() => {
        const idsRaw = localStorage.getItem("IDs");
        const ids = idsRaw ? JSON.parse(idsRaw) : [];

        const matchingEvents = events
            .filter(event => ids.includes(event.id));  

        setShowEvents(matchingEvents);

        console.log(showEvents);
    }, [events]);
    
    return (
        <div className="eventCardList">
            {showEvents.length == 0? 
            <div className="recommendation">
                <strong>
                    Choose your favorite locations to see the events nearby!
                </strong>
            </div>:
            showEvents.map((event) => (
                <EventCard
                key={event.id}
                name={event.name}
                image={event.image}
                date={event.date}
                location={event.location}
                price={event.price}
                />
            ))}
        </div>
    )
}