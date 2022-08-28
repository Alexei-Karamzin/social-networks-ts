import {Dispatch} from "redux";
import {authAPI} from "../../api/api";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export type initialStateType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
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
        default:
            return state
    }
}

// actions

export const setAuthUserDataAC = (data: setUserDataType): setAuthActionType => ({type: 'SET_USER_DATA', data})

// thunks

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id,email,login} = response.data.data
                dispatch(setAuthUserDataAC({id,email,login}))
            }
        })
}

// types

export type setUserDataType = {
    id: string | null
    email: string | null
    login: string | null
}
type setAuthActionType = {
    type: 'SET_USER_DATA',
    data: setUserDataType
}
export type authActionType = setAuthActionType