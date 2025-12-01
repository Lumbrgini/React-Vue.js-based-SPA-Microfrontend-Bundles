import React, {useContext} from 'react';
import { CityContext } from './cityContext';

export function CityOutput() {
    const {cities} = useContext(CityContext);

    return(
        <div>
            {cities != []? cities: "Choose your prefered location to see the nearest events around it!"}
        </div>
    )
}