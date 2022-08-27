import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducer/profile-reducer";
import {dialogReducer} from "./reducer/dialog-reducer";
import {usersReducer} from "./reducer/users-reducer";
import {authReducer} from "./reducer/auth-reducer";
import thunkMiddleware from "redux-thunk";

export const rootReducers = combineReducers({
    ProfilePage: profileReducer,
    MessagePage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppRootStateType = ReturnType<typeof rootReducers>

let store = createStore(rootReducers, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store;

export default store




