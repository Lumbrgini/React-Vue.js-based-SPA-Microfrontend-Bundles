import React from "react";
import ModalWindow from "./modalWindow";
import { useState } from "react";
import './modalWindow.css'

const ModalSetter = () =>{
    const [open, setOpen] = useState(false);

    const handleClose = () =>{
        setOpen(false);
    };

    const handleOpen = () =>{
        setOpen(true);
    };

    return(
        <div className="container">
            <button onClick={handleOpen}>
                Open Modal
            </button>
            <ModalWindow isOpen={open} onClose={handleClose}>
                
                    <h1>GFG</h1>
                    <h3>A computer science portal!</h3>
            
            </ModalWindow>
        </div>
    )
};

export default ModalSetter;

