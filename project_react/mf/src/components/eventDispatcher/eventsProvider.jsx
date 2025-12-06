import React, {useState, useEffect} from "react";
import { EventsContext } from "./eventsContext";

export function EventsProvider ({children}) {
    const [events, setEventsState] = useState(() => {
        const stored = localStorage.getItem('events');
        try{
            return stored? JSON.parse(stored): [];
        } catch {
            return [];
        }
    });

    const setEvents = (newEventsList) => {
        setEventsState(newEventsList);

        localStorage.setItem('events', newEventsList);

        window.dispatchEvent(
            new CustomEvent("events-list-changed"), { detail: {events: newEventsList}}
        );
    };

    useEffect(() => {
        const onStorage = (event) => {
            if(event.key === 'events' && event.newValue) {
                setEventsState(event.newValue)
            };
        };

        const onCustom = (event) => {
            setEventsState();
        }

        window.addEventListener('storage', onStorage);
        window.addEventListener('events-list-changed', onCustom);

        return () => {
            window.removeEventListener('storage', onStorage);
            window.removeEventListener('events-list-changed', onCustom);
        };
    }, []);

    return (
        <EventsContext.Provider value = {{events, setEvents}}>
            {children}
        </EventsContext.Provider>
    )
}