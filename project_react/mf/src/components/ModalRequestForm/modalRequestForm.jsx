import ModalWindow from "../modalWindow/modalWindow";

export default function ModalRequestForm({open, hotel, form, setForm, onClose, onSubmitted}){

    if(!open) return null;

    const today = new Date().toISOString().slice(0, 10);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!e.currentTarget.reportValidity()) return;
        onSubmitted({...form, hotel});
        onClose();
    }

    return (
        <ModalWindow isOpen={open}>
        <div className="modalOverlay">
            <div className="modalCard">
            <div className="modalHeader">
                <h2>Booking request</h2>
                <div className="modalChosenLocation">
                    <p>{hotel?.name}</p>
                    <p>{hotel?.location}</p><br/>
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
                        onClick={onClose}
                        >Cancel</button>
                    <button 
                        className="btnPrimary" 
                        type="submit"
                        >Send Request</button>
                </div>
            </form>
            </div>
        </div>
        </ModalWindow>
    )
}