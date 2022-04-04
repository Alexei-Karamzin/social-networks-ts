import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";


let redusers = combineReducers({
    ProfilePage: profileReducer,
    MessagePage: dialogReducer
})

let store = createStore(redusers)

export default store

