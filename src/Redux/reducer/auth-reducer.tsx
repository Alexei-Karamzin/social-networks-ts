import {Dispatch} from "redux";
import {authAPI} from "../../api/authAPI";
import {SetAppStatusActionType} from "./app-reducer";
import {securityAPI} from "../../api/securityAPI";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isLoggedIn: false,
    errorMessage: null,
    errorAppLogin: false,
    captchaUrl: null, // if null, then captcha is not required
}

// Action

const SET_USER_DATA = 'AUTH/SET_USER_DATA'
const LOGIN = 'AUTH/LOGIN'
const LOGOUT = 'AUTH/LOGOUT'
const SET_ERROR = 'AUTH/SET_ERROR'
const SET_CAPTCHA_URL = 'AUTH/SET_CAPTCHA_URL'

// Reducer

export const authReducer = (state: authInitialStateType = initialState, action: authActionType) => {
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
        case "AUTH/SET_CAPTCHA_URL": {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default:
            return state
    }
}

// Action Creators

export const setAuthUserDataAC = (payload: setUserDataType) => ({type: SET_USER_DATA, payload} as const)
export const setIsLoggedInAC = () => ({type: LOGIN} as const)
export const setIsLoggedOutAC = () => ({type: LOGOUT} as const)
export const setErrorPassword = (message: string | null, err: boolean) => ({type: SET_ERROR, message, err} as const)
export const setCaptchaUrlAC = (captchaUrl: any) => ({type: SET_CAPTCHA_URL, captchaUrl} as const)

// Thunk Creators

export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    let res = await authAPI.authMe()

    if (res.data.resultCode === 0) {
        const {id, email, login} = res.data.data
        dispatch(setAuthUserDataAC({id, email, login, isAuth: true, isLoggedIn: true}))
        /* dispatch<any>(getUserProfileTC(id))*/
    }
}

export const loginTC = (data: LoginPayloadType) => async (dispatch: Dispatch<ActionType | SetAppStatusActionType | any>) => {

    let res = await authAPI.login(data)
    console.log(res)
    if (res.data.resultCode === 0) {
        console.log('login')
        dispatch(setIsLoggedInAC())
        dispatch(getAuthUserDataTC())
        dispatch(setErrorPassword(null, false))
    } else if (res.data.resultCode === 10) {
        dispatch(getCaptchaUrlTC()) // captcha 79less - 33:45
    } else {
        dispatch(setErrorPassword(res.data.messages, true))
    }
}

export const logoutTC = () => async (dispatch: Dispatch<ActionType | SetAppStatusActionType | any>) => {
    let res = await authAPI.logout()

    if (res.data.resultCode === 0) {
        dispatch(setIsLoggedOutAC())
        dispatch(setAuthUserDataAC({id: null, email: null, login: null, isAuth: false, isLoggedIn: false}))
    } else if (res.data.resultCode !== 0) {
        throw new Error('err')
    }
}

export const getCaptchaUrlTC = () => async (dispatch: Dispatch<ActionType | SetAppStatusActionType | any>) => {
    const res = await securityAPI.getCaptchaUrl()

    const captchaUrl = res.data.url
    dispatch(setCaptchaUrlAC(captchaUrl))
}

// Types

export type authInitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isLoggedIn: boolean
    errorMessage: null | string
    errorAppLogin: boolean
    captchaUrl: null | string
}
export type LoginPayloadType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}
type setUserDataType = {
    id: number | null
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
    | ReturnType<typeof setCaptchaUrlAC>