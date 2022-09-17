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
            debugger
            return {
                ...state,
                isLoggedIn: true
            }
        }
        default:
            return state
    }
}

// actions

export const setAuthUserDataAC = (data: setUserDataType): setAuthActionType => ({type: 'AUTH/set-user-data', data})
export const setIsLoggedInAC = (data: LoginPayloadType) => ({type: 'AUTH/login'} as const)

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
            console.log(res.data)
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(res.data.data))
            } else if (res.data.resultCode === 10) {
                dispatch(setIsLoggedInAC(res.data.data))
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
    | setAuthActionType
    | ReturnType<typeof setIsLoggedInAC>