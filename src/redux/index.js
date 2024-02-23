import { thunk } from "redux-thunk"
import promiseMiddleware from "./middleware/ApiCalls"
import rootReducer from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";

let middleware = [thunk, promiseMiddleware];
 
const reduxStore =  createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
)

export default reduxStore