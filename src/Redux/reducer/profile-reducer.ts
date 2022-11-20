import {ProfilePageType} from "../store";
import {ChangeEvent} from "react";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/profileAPI";

let initialState = {
    posts: [
        {id: 1, message: 'Hello', LikeCounts: 14},
        {id: 2, message: 'Hello, how are you?', LikeCounts: 14},
        {id: 3, message: '!#$', LikeCounts: 184}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: profileActionType) => {
    switch (action.type) {
        case 'PROFILE/ADD-POST': {
            let newPost = {
                id: 5,
                message: action.text,
                LikeCounts: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case "PROFILE/SET_USER_PROFILE": {
            return {...state, profile: action.profile}
        }
        case 'PROFILE/SET_STATUS': {
            return {...state, status: action.status ? action.status : '------------'}
        }
        case "PROFILE/UPDATE_STATUS": {
            return {...state, status: action.status ? action.status : '------------'}
        }
        default:
            return state
    }
}

// actions

export const updateTextPostAC = (text: ChangeEvent<HTMLTextAreaElement>): updateTextPostActionType => {
    return {type: 'PROFILE/update-post-text', text: text.currentTarget.value}
}
export const addPostAC = (text: string) => ({type: 'PROFILE/ADD-POST', text} as const)
export const setUserProfileAC = (profile: any) => ({type: 'PROFILE/SET_USER_PROFILE', profile} as const)
export const setUserStatusAC = (status: string) => ({type: 'PROFILE/SET_STATUS', status} as const)
export const updateUserStatusAC = (status: string) => ({type: 'PROFILE/UPDATE_STATUS', status} as const)

// thunks

export const getUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    console.log('getUserProfileTC profile - reducer')
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const getUserStatusTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatusAC(response.data))
        })
}

export const updateUserStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        })
}

// types

export type addPostActionType = {
    type: 'PROFILE/add-post'
}
export type updateTextPostActionType = {
    type: 'PROFILE/update-post-text'
    text: string
}

export type profileActionType =
    | ReturnType<typeof addPostAC>
    | updateTextPostActionType
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>
    | ReturnType<typeof updateUserStatusAC>