import axios from "axios";

export const fetchEvents = async () => {
    axios.get('http://localhost:1337/events')
    .then(response => {
      console.log(response.data); // Array of events
    })
    .catch(error => {
      console.error('Error fetching events:', error);
    });
}

