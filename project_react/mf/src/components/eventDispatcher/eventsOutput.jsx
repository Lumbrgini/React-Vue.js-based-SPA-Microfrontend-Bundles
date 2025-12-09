import React, {useContext} from 'react';
import { EventsContext } from './eventsContext';

export function EventsOutput() {
    const {events} = useContext(EventsContext);

    return(
        <div>
            {events != []? events: "Choose your prefered location to see the nearest events around it!"}
        </div>
    )
}