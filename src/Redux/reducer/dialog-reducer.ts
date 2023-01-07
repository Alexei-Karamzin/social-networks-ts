import {MessagePageType} from "../../trash/store";

let initialState = {
    message: [
        {id: 1, title: 'Hello'},
        {id: 2, title: 'Hello!!!'},
        {id: 3, title: '!#$'}
    ],
    dialog: [
        {id: 1, name: 'Tim'},
        {id: 2, name: 'Sanya'},
        {id: 3, name: 'Lexa'},
        {id: 4, name: 'Ilya'},
        {id: 5, name: 'Kolik'}
    ]
}

// Action

const ADD_MESSAGE_FROM_DIALOG = "DIALOG/ADD_MESSAGE_FROM_DIALOG"

// Reducer

export const dialogReducer = (state: MessagePageType = initialState, action: dialogActionsType) => {
    switch (action.type) {
        case 'DIALOG/ADD_MESSAGE_FROM_DIALOG': {
            return {
                ...state,
                newMessageDialog: '',
                message: [...state.message, {id:6, title: action.message}]
            }
        }
        default:
            return state;
    }
}

// Action Creators

export const AddMessageFromDialogAC = (message: string): addMessageFromDialogActionType => {
    return {type: ADD_MESSAGE_FROM_DIALOG, message}
}

// Types

export type dialogActionsType = addMessageFromDialogActionType | updateTextDialogActionType
export type addMessageFromDialogActionType = {
    type: 'DIALOG/ADD_MESSAGE_FROM_DIALOG',
    message: string
}
export type updateTextDialogActionType = {
    type: 'UPDATE-TEXT-DIALOG'
    message: string
}