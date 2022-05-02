import {ProfilePageType} from "./store";
import store from './redux-store'
import {ChangeEvent} from "react";


export type profileActionType = addPostActionType | updateTextPostActionType


export type addPostActionType = {
    type: 'ADD-POST'
}
export type updateTextPostActionType = {
    type: 'UPDATE-TEXT-POST'
    text: string
}

/*const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'*/

let initialState = {
    posts: [
        {id: 1, message: 'Hello', LikeCounts: 14},
        {id: 2, message: 'Hello, how are you?', LikeCounts: 14},
        {id: 3, message: '!#$', LikeCounts: 184}
    ],
    newPostText: 'init massage'
}


export const profileReducer = (state: ProfilePageType = initialState, action: profileActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                LikeCounts: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case 'UPDATE-TEXT-POST': {
            return {...state, newPostText: action.text}
        }
        default:
            return state
    }
}

export const UpdateTextPostAC = (text: ChangeEvent<HTMLTextAreaElement>): updateTextPostActionType => {
    return {type: 'UPDATE-TEXT-POST', text: text.currentTarget.value}
}
export const AddPostAC = (): addPostActionType => {
    return {type: 'ADD-POST'}
}