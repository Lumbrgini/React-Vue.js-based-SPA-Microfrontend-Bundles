import React, { useState } from "react";
import { HotelCard } from "./hotelCard";
import { useToast } from "../toastComponent/useToast";
import Toast from "../toastComponent/Toast";
import "./hotelCardList.css"
import inns from "../../pictures/inns.jpg";
import falken from "../../pictures/falken.jpg";
import worldhotel from "../../pictures/worldhotel.jpg";
import boutique from "../../pictures/boutique.jpg";
import seehotel from "../../pictures/seehotel.jpg";
import parkhotel from "../../pictures/parkhotel.jpg";
import ModalRequestForm from "../ModalRequestForm/modalRequestForm";

const hotels = [
    {
        id: 1,
        name: "INNs Holz",
        image: inns,
        location: "4161 Ulrichsberg",
        price: 130,
        rating: 4.9,
    }, 
    {
        id: 2,
        name: "Falkensteiner Hotel",
        image: falken,
        location: "4190 Bad Leonfelden",
        price: 170,
        rating: 4.4,
    },
    {
        id: 3,
        name: "Trans World Hotel Donauwelle",
        image: worldhotel,
        location: "4020 Linz",
        price: 73,
        rating: 4.0,
    },
    {
        id: 4,
        name: "Boutique Hotel Hauser",
        image: boutique,
        location: "4600 Wels",
        price: 111,
        rating: 4.7,
    },
    {
        id: 5,
        name: "Seehotel im Weyer",
        image: seehotel,
        location: "4810 Gmunden",
        price: 142,
        rating: 4.9,
    },
    {
        id: 6,
        name: "Parkhotel Branau",
        image: parkhotel,
        location: "5280 Branau am Inn",
        price: 80,
        rating: 4.0,
    }

]

export function HotelCardList(){
    
    const {toast, showToast} = useToast(3500);
    const [favorites, setFavorites] = useState(() =>{
        const stored = localStorage.getItem("Hotels");
        try{
            return stored ? JSON.parse(stored): [];
        } catch{
            return [];
        }
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [form, setForm] = useState({
        name: "",
        famName: "",
        nationality: "",
        arrDate: "",
        depDate: "",
        email: "",
    });

    const openBooking = (hotel) => {
        setSelectedHotel(hotel);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setForm("");
    }

    const handleSubmitted = () => {
        showToast("Your request have been successfully sent!");
        closeModal();
    }

    
    const handleAddToFavorites = (location) => {
        setFavorites(prev => {
            let updatedFav;

            if (prev.includes(location)) {
                updatedFav = prev.filter(item => item !== location);
            } else {
                updatedFav = [...prev, location];
            }

            localStorage.setItem("Hotels", JSON.stringify(updatedFav));

            const ids = hotels
                .filter(hotel => updatedFav.includes(hotel.location))
                .flatMap(hotel => hotel.id || []);

            localStorage.setItem("IDs", JSON.stringify(ids));

            return updatedFav;
        });           
    };

    return (
        <>
        <div className="hotelCardList">
            {hotels.map((hotel) => (
                <HotelCard
                key={hotel.id}
                name={hotel.name}
                image={hotel.image}
                location={hotel.location}
                price={hotel.price}
                rating={hotel.rating}
                isFavorite={favorites.includes(hotel.location)}
                onAddFavorite={handleAddToFavorites} 
                onBook={() => openBooking(hotel)}
                />
            ))}
        </div>

        <ModalRequestForm
            open = {isModalOpen}
            hotel = {selectedHotel}
            form = {form}
            setForm = {setForm}
            onClose = {closeModal}
            onSubmitted = {handleSubmitted}
        >
        </ModalRequestForm>

        <Toast open={toast.open} message={toast.message} />
        </>
    );
}
