import counterReducer from "./counter";
import loggedReducer from "./isLoged";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

//counter - naming is up to you
//if write - counterReducer only, that means counterReducer: counterReducer

export default allReducers;