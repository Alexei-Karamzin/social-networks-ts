
export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    title: string
}
export type PostsType = {
    id: number,
    message: string,
    LikeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type MessagePageType = {
    dialog: Array<DialogType>
    message: Array<MessageType>
    newMessageDialog: string
}

export type RootStateType = {
    ProfilePage: ProfilePageType
    MessagePage: MessagePageType
}

export type storeType = {
    _state: RootStateType
    getState: () => RootStateType
    dispatch: (action:any) => void
    subscribe: (callback: ()=>void) => void
    _callSubscriber: () => void
}

export type actionType = addPostActionType | UpdateTextPostActionType | AddMessageFromDialogActionType | UpdateTextDialogActionType

export type addPostActionType = {
    type: 'ADD-POST'
}
export type UpdateTextPostActionType = {
    type: 'UPDATE-TEXT-POST'
    text: string
}
export type AddMessageFromDialogActionType = {
    type: 'ADD-MESSAGE-FROM-DIALOG'
}
export type UpdateTextDialogActionType = {
    type: 'UPDATE-TEXT-DIALOG'
    message: string
}

const ADD_MESSAGE_FROM_DIALOG = 'ADD-MESSAGE-FROM-DIALOG'
const UPDATE_TEXT_DIALOG = 'UPDATE-TEXT-DIALOG'
const ADD_POST = 'ADD-POST'
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST'

const store: storeType = {
    _state: {
        ProfilePage: {
            posts: [
                {id: 1, message: 'Hello', LikeCounts: 14},
                {id: 2, message: 'Hello, how are you?', LikeCounts: 14},
                {id: 3, message: '!#$', LikeCounts: 184}
            ],
            newPostText: ''
        },
        MessagePage: {
            message: [
                {id: 1, title: 'Hello'},
                {id: 2, title: 'Hello!!!'},
                {id: 3, title: '!#$'}
            ],
            newMessageDialog: '',
            dialog: [
                {id: 1, name: 'Tim'},
                {id: 2, name: 'Sanya'},
                {id: 3, name: 'Lexa'},
                {id: 4, name: 'Ilya'},
                {id: 5, name: 'Kolik'}
            ]
        }
    },

    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._state.ProfilePage.posts.push(
                {
                    id: 5,
                    message: this._state.ProfilePage.newPostText,
                    LikeCounts: 0
                }
            )
            this._state.ProfilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_TEXT_POST) {
            this._state.ProfilePage.newPostText = action.text
            this._callSubscriber()
        } else if (action.type === ADD_MESSAGE_FROM_DIALOG) {
            this._state.MessagePage.message.push(
                {
                    id: 5,
                    title: this._state.MessagePage.newMessageDialog
                }
            )
            this._state.MessagePage.newMessageDialog = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_TEXT_DIALOG) {
            this._state.MessagePage.newMessageDialog = action.message;
            this._callSubscriber()
        } else {
            this._callSubscriber()
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer

    },
    _callSubscriber() {
        //
    }
}


export const AddMessageFromDialogAC = () => {
    return store.dispatch({type: ADD_MESSAGE_FROM_DIALOG})
}
export const UpdateTextDialogAC = (message:string) => {
    return store.dispatch({type:UPDATE_TEXT_DIALOG, message:message})
}
export const UpdateTextPostAC = (text:string) =>{
    return store.dispatch({type:UPDATE_TEXT_POST, text:text})
}

export const AddPostAC = () =>{
    return store.dispatch({type:ADD_POST})
}

export default store;

