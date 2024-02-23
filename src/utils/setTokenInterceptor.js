import axios from 'axios';
import { Alert } from 'react-native';

export const setTokenInterceptor = (data={}, setToken=true, gbResponse=true) => {
    if(setToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

        if(gbResponse) {
            axios.interceptors.response.use(
                function (response) {
                    return response;
                },
                function (errors) {
                    if(errors.response.status === 409) {
                        console.log(errors.response.data?.msg, "Error")
                    }
                }
            )
        }
    }
}