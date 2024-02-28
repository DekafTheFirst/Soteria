import axios from "axios";

export const fetchEvents = async () => {
    axios.get('http://192.168.5.197:1337/api/events')
    .then(response => {
      console.log(response.data); // Array of events
    })
    .catch(error => {
      console.error('Error fetching events:', error);
    });
}

