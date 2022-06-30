import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";


export const rootReducers = combineReducers({
    ProfilePage: profileReducer,
    MessagePage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppRootStateType = ReturnType<typeof rootReducers>



let store = createStore(rootReducers)

export default store




