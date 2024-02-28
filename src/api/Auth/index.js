import axios from "axios";
import { auth } from "../../../config";

// Login User
export const loginUser = (values) => {
    // const url = 'api/users/login';

    // return axios.post(url, values).then(response => response.data);
    console.log(values);
}

// Register User
export const registerUser = () => {
    createUserWithEmailAndPassword(auth, "dekeji2@gmail.com", '#Paula2002')
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
    return axios.post(url, values).then(response => response.data);
}