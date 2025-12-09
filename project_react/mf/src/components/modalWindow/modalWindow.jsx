import React from "react";
import './modalWindow.css'

const ModalWindow = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;


    return(
        <div onClick={onClose} className="modalBackground">
            <div className="modalWindow">
                {children}
            </div>
        </div>
    )
}

export default ModalWindow;