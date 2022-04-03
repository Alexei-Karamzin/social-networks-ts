

/*const ADD_MESSAGE_FROM_DIALOG = 'ADD-MESSAGE-FROM-DIALOG'
const UPDATE_TEXT_DIALOG = 'UPDATE-TEXT-DIALOG'*/

import store, {MessagePageType} from "./state";

export type dialogActionsType = addMessageFromDialogActionType | updateTextDialogActionType

export type addMessageFromDialogActionType = {
    type: 'ADD-MESSAGE-FROM-DIALOG'
}
export type updateTextDialogActionType = {
    type: 'UPDATE-TEXT-DIALOG'
    message: string
}

export const dialogReducer = (state: MessagePageType, action: dialogActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE-FROM-DIALOG": {
            state.message.push(
                {
                    id: 5,
                    title: state.newMessageDialog
                }
            )
            state.newMessageDialog = ''
            return state
        }

        case 'UPDATE-TEXT-DIALOG': {
            state.newMessageDialog = action.message;
            return state
        }

        default:
            return state;
    }
}



export const AddMessageFromDialogAC = ():addMessageFromDialogActionType => {
    return store.dispatch({type:'ADD-MESSAGE-FROM-DIALOG'})
}
export const UpdateTextDialogAC = (message:string):updateTextDialogActionType => {
    return store.dispatch({type:'UPDATE-TEXT-DIALOG', message:message})
}