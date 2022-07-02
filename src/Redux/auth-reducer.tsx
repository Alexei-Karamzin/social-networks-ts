import React from "react";


const SET_USER_DATA = 'SET_USER_DATA'

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
    debugger
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



export type setUserDataType = {
    id: string | null
    email: string | null
    login: string | null
}

export const setAuthUserDataAC = (data: setUserDataType): setAuthActionType => ({type: 'SET_USER_DATA', data})

type setAuthActionType = {
    type: 'SET_USER_DATA',
    data: setUserDataType
}

export type authActionType = setAuthActionType