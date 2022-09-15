import {Dispatch} from "redux";
import {authAPI} from "../../api/authAPI";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    //isLoggedIn: false
}

export type initialStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    //isLoggedIn: boolean
}

export const authReducer = (state: initialStateType = initialState, action: authActionType) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        /*case "LOGIN": {
            return {
                ...state,
                isLoggedIn: action
            }
        }*/
        default:
            return state
    }
}

// actions

export const setAuthUserDataAC = (data: setUserDataType): setAuthActionType => ({type: 'SET_USER_DATA', data})
export const loginAC = () => ({type: 'LOGIN'} as const)

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

export const loginTC = (dispatch: Dispatch) => (data: LoginPayloadType) => {

    const email = data.email
    const password = data.password
    const rememberMe = {...data}

    authAPI.login(email, password)
        .then(res => {
            if (res.data.resultCode === 0) {
                loginAC()
            }
        })
}


// types

export type LoginPayloadType = {
    email: string
    password: string
    rememberMe?: boolean
}

type setUserDataType = {
    id: string | null
    email: string | null
    login: string | null
}
type setAuthActionType = {
    type: 'SET_USER_DATA',
    data: setUserDataType
}
type authActionType =
    | setAuthActionType
    | ReturnType<typeof loginAC>