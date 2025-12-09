import React from "react";

export function RequestForm(){
    const [name, setName] = useState('');
    const [famName, setfamName] = useState('');
    const [country, setCountry] = useState('');
    const [arrDate, setArrDate] = useState('2025-12-06');
    const [depDate, setDepDate] = useState('');

    function handleChange(e){
        setValue(e.target.value);
    }

    return (
        <div className="form">
            <label for="start">Start date:</label>
            <input
                type="date"
                id="start"
                name="trip-start"
                value = {arrDate}
                min="2025-12-06"
                max="2026-12-31" 
                onChange={handleChange}/>
        </div>
    )
}