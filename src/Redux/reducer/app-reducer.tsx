import {Dispatch} from "redux";
import {authAPI} from "../../api/authAPI";
import {setAuthUserDataAC} from "./auth-reducer";

const initialState = {
    isInitialized: false // true когда проинициализировалось приложение
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        /*case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}*/
        case "APP/SET-IS-INITIALIZED":
            return {...state, isInitialized: action.payload}
        default:
            return state
    }
}

// actions

/*export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)*/
export const setAppInitializedAC = (payload: boolean) => ({type: 'APP/SET-IS-INITIALIZED', payload} as const)

// thunks

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                const {id, email, login} = res.data.data
                dispatch(setAppInitializedAC(true))
                dispatch(setAuthUserDataAC({id, email, login, isAuth: true, isLoggedIn: true}))
            } else {
                dispatch(setAppInitializedAC(true))
            }

        })
}

// types

export type SetAppStatusActionType = ReturnType<typeof initializeAppTC>
type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof setAppInitializedAC>
