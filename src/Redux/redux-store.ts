import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";


export const rootReducers = combineReducers({
    ProfilePage: profileReducer,
    MessagePage: dialogReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducers>



let store = createStore(rootReducers)

export default store




