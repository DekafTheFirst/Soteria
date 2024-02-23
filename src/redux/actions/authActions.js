import { UPDATE_USER_ACCESS_TOKEN, UPDATE_USER_LOGIN } from "../constants";

export const updateUserLogin = (user, isLoggedIn) => {
    return {
        type: UPDATE_USER_LOGIN,
        user,
        isLoggedIn
    }
}


export const updateUserAccessToken = (accessToken) => {

    return {
        type: UPDATE_USER_ACCESS_TOKEN,
        accessToken
    }
}