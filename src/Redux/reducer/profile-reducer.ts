import {PostsType} from "../../trash/store";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/profileAPI";

let initialState = {
    posts: [
        {id: 1, message: 'Hello', LikeCounts: 14},
        {id: 2, message: 'Hello, how are you?', LikeCounts: 14},
        {id: 3, message: '!#$', LikeCounts: 184}
    ],
    profile: {
        userId: 1,
        aboutMe: '',
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}

// Action

const ADD_POST = 'PROFILE/ADD_POST'
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE'
const SET_STATUS = 'PROFILE/SET_STATUS'
const UPDATE_STATUS = 'PROFILE/UPDATE_STATUS'
const SET_PHOTO_SUCCESS = 'PROFILE/SET_PHOTO_SUCCESS'

// Reducer

export const profileReducer = (state: ProfilePageType = initialState, action: profileActionType) => {
    switch (action.type) {
        case 'PROFILE/ADD_POST': {
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
        case 'PROFILE/SET_USER_PROFILE': {
            return {...state, profile: {...action.profile}}
        }
        case 'PROFILE/SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'PROFILE/UPDATE_STATUS': {
            return {...state, status: action.status}
        }
        case "PROFILE/SET_PHOTO_SUCCESS": {
            return {...state, profile: {...state.profile, photos: action.photo}}
        }
        default:
            return state
    }
}

// Action Creators

export const addPostAC = (text: string) => ({type: ADD_POST, text} as const)
export const setUserProfileAC = (profile: ProfileUserType) => ({type: SET_USER_PROFILE, profile} as const)
export const setUserStatusAC = (status: string) => ({type: SET_STATUS, status} as const)
export const updateUserStatusAC = (status: string) => ({type: UPDATE_STATUS, status} as const)
export const savePhotoSuccessAC = (photo: any) => ({type: SET_PHOTO_SUCCESS, photo} as const)

// Thunk Creators

export const getUserProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    let res = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(res.data))
}
export const getUserStatusTC = (userId: number) => async (dispatch: Dispatch) => {
    let res = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC(res.data))
}
export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    let res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setUserStatusAC(status))
    }
}
export const savePhotoTC = (file: any) => async (dispatch: Dispatch) => {
    let res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(res.data.data.photos))
    }
}
export const editProfileTC = (userId: number, value: formDataType) => async (dispatch: Dispatch) => {
    let currentObject = {
        userId: userId,
        lookingForAJob: value.lookingForAJob,
        lookingForAJobDescription: value.lookingForAJobDescription,
        fullName: value.fullName,
        aboutMe: value.aboutMe,
        contacts: {
            github: value.github,
            vk: value.vk,
            facebook: value.facebook,
            instagram: value.instagram,
            twitter: value.twitter,
            website: value.website,
            youtube: value.youtube,
            mainLink: value.mainLink,
        }
    }
    let res = await profileAPI.editProfile(currentObject)
    dispatch<any>(getUserProfileTC(userId))
}

// Types

export type updateTextPostActionType = {
    type: 'PROFILE/UPDATE_POST_TEXT'
    text: string
}

export type profileActionType =
    | ReturnType<typeof addPostAC>
    | updateTextPostActionType
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setUserStatusAC>
    | ReturnType<typeof updateUserStatusAC>
    | ReturnType<typeof savePhotoSuccessAC>

export type ProfileUserType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: UserPhotoType
}

type UserPhotoType = {
    small: string | null
    large: string | null
}

export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileUserType
    status: string
}

export type formDataType = {
    aboutMe: string,
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string,
}