import React, {useState, useEffect} from "react";
import { CityContext } from "./cityContext";

export function CityProvider ({children}) {
    const [cities, setCitiesState] = useState(() => {
        const stored = localStorage.getItem('cities');
        try{
            return stored? JSON.parse(stored): [];
        } catch {
            return [];
        }
    });

    const setCities = (newCitiesList) => {
        setCitiesState(newCitiesList);

        localStorage.setItem('cities', newCitiesList);

        window.dispatchEvent(
            new CustomEvent("cities-list-changed"), { detail: {cities: newCitiesList}}
        );
    };

    useEffect(() => {
        const onStorage = (event) => {
            if(event.key === 'cities' && event.newValue) {
                setCitiesState(event.newValue)
            };
        };

        const onCustom = (event) => {
            setCitiesState(event.detail.cities);
        }

        window.addEventListener('storage', onStorage);
        window.addEventListener('cities-list-changed', onCustom);

        return () => {
            window.removeEventListener('storage', onStorage);
            window.removeEventListener('cities-list-changed', onCustom);
        };
    }, []);

    return (
        <CityContext.Provider value = {{cities, setCities}}>
            {children}
        </CityContext.Provider>
    )
}