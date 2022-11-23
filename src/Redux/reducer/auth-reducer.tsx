import {Dispatch} from "redux";
import {authAPI} from "../../api/authAPI";
import {SetAppStatusActionType} from "./app-reducer";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isLoggedIn: false,
    errorMessage: null,
    errorAppLogin: false
}

export const authReducer = (state: initialStateType = initialState, action: authActionType) => {
    switch (action.type) {
        case 'AUTH/SET_USER_DATA': {
            return {
                ...state,
                ...action.payload,
            }
        }
        case "AUTH/LOGIN": {
            return {
                ...state,
                isLoggedIn: true
            }
        }
        case "AUTH/LOGOUT": {
            return {
                ...state,
                isLoggedIn: false
            }
        }
        case "AUTH/SET_ERROR": {
            return {
                ...state,
                errorAppLogin: action.err,
                errorMessage: action.message
            }
        }
        default:
            return state
    }
}

// actions

export const setAuthUserDataAC = (payload: setUserDataType) => ({type: 'AUTH/SET_USER_DATA', payload} as const)
export const setIsLoggedInAC = () => ({type: 'AUTH/LOGIN'} as const)
export const setIsLoggedOutAC = () => ({type: 'AUTH/LOGOUT'} as const)
export const setErrorPassword = (message: string | null, err: boolean) => ({type: 'AUTH/SET_ERROR', message, err} as const)

// thunks

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC({id, email, login, isAuth: true, isLoggedIn: true}))
            }
        })
}

export const loginTC = (data: LoginPayloadType) => (dispatch: Dispatch<ActionType | SetAppStatusActionType | any>) => {

    authAPI.login(data)
        .then(res => {
            console.log(res)
            if (res.data.resultCode === 0) {
                console.log('login')
                dispatch(setIsLoggedInAC())
                dispatch(getAuthUserDataTC())
                dispatch(setErrorPassword(null, false))
            } else if (res.data.resultCode === 10) {
                dispatch(setErrorPassword(res.data.messages, true)) // captcha 79less - 33:45
            }
        })
}

export const logoutTC = () => (dispatch: Dispatch<ActionType | SetAppStatusActionType | any>) => {

    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedOutAC())
                dispatch(setAuthUserDataAC({id: null, email: null, login: null, isAuth: false, isLoggedIn: false}))
            } else if (res.data.resultCode !== 0) {
                throw new Error('err')
            }
        })
}

// types

export type initialStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isLoggedIn: boolean
    errorMessage: null | string
    errorAppLogin: boolean
}
export type LoginPayloadType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}
type setUserDataType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isLoggedIn: boolean
}
type ActionType = ReturnType<typeof setIsLoggedInAC>
type authActionType =
    | ActionType
    | ReturnType<typeof setIsLoggedOutAC>
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setErrorPassword>