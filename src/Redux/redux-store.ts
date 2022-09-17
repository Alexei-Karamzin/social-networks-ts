import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducer/profile-reducer";
import {dialogReducer} from "./reducer/dialog-reducer";
import {usersReducer} from "./reducer/users-reducer";
import {authReducer} from "./reducer/auth-reducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    MessagePage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

type AppDispatchType = ThunkDispatch<AppRootStateType, void, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>()

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store;

export default store




