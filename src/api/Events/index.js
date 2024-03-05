import axios from "axios"


export const fetchEvents = async () => {
    try{
        const events = await axios.get('http://192.168.0.102:1337/api/events?populate=image')
        return events.data
    } catch(error) {
        console.log(error)
        return error
    }
}