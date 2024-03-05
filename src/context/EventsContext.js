import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const EventsContext = createContext();

export const EventsContextProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        try{
            const fetchedEvents = await axios.get('http://192.168.5.197:1337/api/events')
            setEvents(fetchEvents.data) // Array of events
            console.log('events loaded: ', fetchedEvents.data)
            return events
        } catch(error) {
            console.log(error)
            return error
        }

    }


    return (
        <EventsContext.Provider value={{
            events,
        }}>
            {children}
        </EventsContext.Provider>
    )

}