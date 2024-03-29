import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./reducer/profile-reducer";
import {dialogReducer} from "./reducer/dialog-reducer";
import {usersReducer} from "./reducer/users-reducer";
import {authReducer} from "./reducer/auth-reducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {appReducer} from "./reducer/app-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    MessagePage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = ThunkDispatch<AppRootStateType, void, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>()

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
//let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.__store__ = store;

export default store




