import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducer/profile-reducer";
import {dialogReducer} from "./reducer/dialog-reducer";
import {usersReducer} from "./reducer/users-reducer";
import {authReducer} from "./reducer/auth-reducer";


export const rootReducers = combineReducers({
    ProfilePage: profileReducer,
    MessagePage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppRootStateType = ReturnType<typeof rootReducers>



let store = createStore(rootReducers)

export default store




