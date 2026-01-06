import React, {useState} from "react";
import {useNavigate} from "react-router";
import "./hotelCard.css";
import ModalWindow from "../modalWindow/modalWindow";

import { useToast } from "../toastComponent/useToast";
import Toast from "../toastComponent/Toast";

export function HotelCard({name, image, location, price, rating, isFavorite, onAddFavorite}) {

    const today = new Date().toISOString().slice(0, 10);
    const { toast, showToast } = useToast(3500);

    const [form, setForm] = useState({
        name: "",
        famName: "",
        nationality: "",
        arrDate: "",
        depDate: "",
        email: "",
    });

    const [open, setOpen] = useState(false);

    const handleClose = () =>{
        setOpen(false);
    };

    const handleOpen = () =>{
        setOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();   
        if (!e.currentTarget.reportValidity()) return;

        showToast("Your request have been successfully sent!");
        handleClose();
        setForm("");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };


    return (
        <>
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
                <div className="btnContainer">
                    <button onClick={() => {
                        onAddFavorite(location);
                    }} className="addFavBtn">
                        {isFavorite? 'Remove from ': 'Add to '} Favorites
                    </button>
                    <button
                    onClick={handleOpen} className="bookBtn">Book this option</button>
                    
                </div>
            </article>
            <ModalWindow isOpen={open}>
                <div className="modalOverlay">
                    <div className="modalCard">
                    <div className="modalHeader">
                        <h2>Booking request</h2>
                        <div className="modalChosenLocation">
                            <p>{name}</p>
                            <p>{location}</p><br/>
                            <div className="inputOverview">
                                {(form.name?.trim() || form.famName?.trim()) && (
                                    <p>For: <em>{form.name} {form.famName}</em></p>
                                )}
                                {form.email?.trim() && (
                                    <p>E-Mail: <em>{form.email}</em></p>
                                )}
                                {form.nationality?.trim() && (
                                    <p>From: <em>{form.nationality}</em></p>
                                )}
                                {(form.arrDate?.trim() && form.depDate?.trim()) && (
                                    <>
                                        <p>From: <em>{form.arrDate}</em></p>
                                        <p>Till: <em>{form.depDate}</em></p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    
     
                    <form className="modalForm" onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input 
                                id="name" 
                                name="name" 
                                value={form.name} 
                                onChange={handleChange} 
                            />
                        </div>
     
                        <div className="field">
                            <label htmlFor="famName">Family Name</label>
                            <input 
                                id="famName" 
                                name="famName" 
                                value={form.famName} 
                                onChange={handleChange} 
                            />
                        </div>
     
                        <div className="field">
                            <label htmlFor="email">E-Mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={form.email} 
                                onChange={handleChange}
                                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                required 
                            />
                        </div>
     
                        <div className="field">
                            <label htmlFor="nationality">Country</label>
                            <input 
                                id="nationality" 
                                name="nationality" 
                                value={form.nationality} 
                                onChange={handleChange} 
                            />
                        </div>
     
                        <div className="grid2">
                        <div className="field">
                            <label htmlFor="start">Arrival date</label>
                            <input
                                type="date"
                                id="start"
                                name="arrDate"
                                value={form.arrDate}
                                min={today}
                                max="2026-12-31"
                                onChange={handleChange}
                            />
                        </div>
     
                        <div className="field">
                            <label htmlFor="end">Departure date</label>
                            <input
                                type="date"
                                id="end"
                                name="depDate"
                                value={form.depDate}
                                min={form.arrDate}
                                max="2026-12-31"
                                onChange={handleChange}
                            />
                        </div>
                        </div>
     
                        <div className="modalActions">
                            <button 
                                className="btnGhost" 
                                type="button" 
                                onClick={handleClose}>Cancel</button>
                            <button 
                                className="btnPrimary" 
                                type="submit"
                                >Send Request</button>
                        </div>
                    </form>
                    </div>
                </div>
            </ModalWindow>
            <Toast open={toast.open} message={toast.message} />
        </>
    )
}