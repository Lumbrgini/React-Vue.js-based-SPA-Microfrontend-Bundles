import React from "react";
import ModalWindow from "./modalWindow";
import { useState, useRef, useEffect } from "react";
import './modalWindow.css'

const ModalSetter = () =>{
    const count = useRef(null);
    const [open, setOpen] = useState(false);
    const [parsed, setParsed] = useState([]);

    useEffect(() => {
        if (open && count.current) {
            count.current.textContent = `Favorite locations (${parsed.length}):`;
        }
    }, [open, parsed.length]);

    const handleClose = () =>{
        setOpen(false);
    };

    const handleOpen = () =>{
        const arr = JSON.parse(localStorage.getItem("Hotels") || "[]");
        setParsed(arr);
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
                        <p ref={count}></p>
                        <div>
                            {parsed.map((loc) => (
                                <div key={loc}>
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

