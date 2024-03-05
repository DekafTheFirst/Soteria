import axios from "axios"


export const fetchEvents = async () => {
    try{
        const events = await axios.get('http://192.168.5.197:1337/api/events?populate=image')
        return events.data
    } catch(error) {
        console.log(error)
        return error
    }
}

export const getEventVideo = async (id) => {
    try{
        // const events = await axios.get(`http://192.168.5.197:1337/api/events/${id}?populate=image`)
        const events = await axios.get(`http://192.168.5.197:1337/api/events/${id}?populate=video&fields=id`)
        const eventVideoData = events.data.data.attributes.video.data
        
        if(eventVideoData) {
            return events.data.data.attributes.video.data.attributes.url
        }
        else{
            return null
        }
    } catch(error) {
        console.log(error)
        return error
    }
}