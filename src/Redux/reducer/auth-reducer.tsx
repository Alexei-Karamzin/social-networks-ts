import {Dispatch} from "redux";
import {authAPI} from "../../api/authAPI";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isLoggedIn: false
}

export type initialStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isLoggedIn: boolean
}

export const authReducer = (state: initialStateType = initialState, action: authActionType) => {
    switch (action.type) {
        case 'AUTH/set-user-data': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case "AUTH/login": {
            return {
                ...state,
                isLoggedIn: true
            }
        }
        case "AUTH/logout": {
            return {
                ...state,
                isLoggedIn: false
            }
        }
        default:
            return state
    }
}

// actions

export const setAuthUserDataAC = (data: setUserDataType): setAuthActionType => ({type: 'AUTH/set-user-data', data})
export const setIsLoggedInAC = () => ({type: 'AUTH/login'} as const)
export const setIsLoggedOutAC = () => ({type: 'AUTH/logout'} as const)

// thunks

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC({id, email, login}))
            }
        })
}

export const loginTC = (data: LoginPayloadType) => (dispatch: Dispatch) => {

    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC())
            } else if (res.data.resultCode === 10) {
                //dispatch(setIsLoggedInAC(res.data.data))
                throw new Error('err')
            }
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {

    authAPI.logout()
        .then(res => {
            console.log(res)
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedOutAC())
            } else if (res.data.resultCode === 10) {
                throw new Error('err')
            }
        })
}

// types

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
}
type setAuthActionType = {
    type: 'AUTH/set-user-data',
    data: setUserDataType
}
type authActionType =
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setIsLoggedOutAC>
    | ReturnType<typeof setAuthUserDataAC>