/*const ADD_MESSAGE_FROM_DIALOG = 'ADD-MESSAGE-FROM-DIALOG'
const UPDATE_TEXT_DIALOG = 'UPDATE-TEXT-DIALOG'*/

import {MessagePageType} from "./store";
import store from "./redux-store";
import {ChangeEvent} from "react";
/*import {v1} from "uuid";*/


export type dialogActionsType = addMessageFromDialogActionType | updateTextDialogActionType

export type addMessageFromDialogActionType = {
    type: 'ADD-MESSAGE-FROM-DIALOG'
}
export type updateTextDialogActionType = {
    type: 'UPDATE-TEXT-DIALOG'
    message: string
}


let initialState = {
    message: [
        {id: 1, title: 'Hello'},
        {id: 2, title: 'Hello!!!'},
        {id: 3, title: '!#$'}
    ],
    newMessageDialog: 'init massage',
    dialog: [
        {id: 1, name: 'Tim'},
        {id: 2, name: 'Sanya'},
        {id: 3, name: 'Lexa'},
        {id: 4, name: 'Ilya'},
        {id: 5, name: 'Kolik'}
    ]
}

export const dialogReducer = (state: MessagePageType = initialState, action: dialogActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE-FROM-DIALOG": {
            let newMessage = {id:6, title: state.newMessageDialog}
            state.newMessageDialog = ''
            return {...state, message: [...state.message, newMessage]}
        }

        case 'UPDATE-TEXT-DIALOG': {
            state.newMessageDialog = action.message;
            return {...state, newMessageDialog: action.message}
        }

        default:
            return state;
    }
}

export const AddMessageFromDialogAC = (): addMessageFromDialogActionType => {
    return {type: 'ADD-MESSAGE-FROM-DIALOG'}
}
export const UpdateTextDialogAC = (message: ChangeEvent<HTMLTextAreaElement>): updateTextDialogActionType => {
    return {type: 'UPDATE-TEXT-DIALOG', message: message.currentTarget.value}
}