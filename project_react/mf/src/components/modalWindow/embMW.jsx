import React from "react";
import ModalWindow from "./modalWindow";
import { useState, useRef } from "react";
import './modalWindow.css'

const ModalSetter = () =>{
    let numberOfLocations = useRef(0);
    const [open, setOpen] = useState(false);
    const cities = localStorage.getItem("Hotels");
    const parsed = JSON.parse(cities);

    const handleClose = () =>{
        setOpen(false);
    };

    const handleOpen = () =>{
        setOpen(true);
    };

    return(
        <div className="container">
            <button className = "modalBtn" onClick={handleOpen}>
                Locations
            </button>
            <ModalWindow isOpen={open} onClose={handleClose}>
                {parsed.length == 0? <div>Choose your favorite locations to see the events nearby!</div>: 
                <>
                <p>Favorite locations ({numberOfLocations.current = parsed.length}): </p>
                
                <div>
                    {parsed.map((loc, i) => (
                        <div key={i}>
                            {loc}
                        </div>
                    ))}
                </div>
                </>
                } 
            </ModalWindow>
        </div>
    )
};

export default ModalSetter;

