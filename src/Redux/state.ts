
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
<<<<<<< HEAD


=======
    _rerenderEntireTree() {
        //
    },
>>>>>>> origin/main
    getState() {
        return this._state
    },


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._state.ProfilePage.posts.push(
                {
                    id: 5,
                    message: this._state.ProfilePage.newPostText,
                    LikeCounts: 0
                }
            )
            this._state.ProfilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-TEXT-POST') {
            this._state.ProfilePage.newPostText = action.text
            this._callSubscriber()
        } else if (action.type === 'ADD-MESSAGE-FROM-DIALOG') {
            this._state.MessagePage.message.push(
                {
                    id: 5,
                    title: this._state.MessagePage.newMessageDialog
                }
            )
            this._state.MessagePage.newMessageDialog = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-TEXT-DIALOG') {
            this._state.MessagePage.newMessageDialog = action.message;
            this._callSubscriber()
        }
    },


    subscribe(observer) {
        this._callSubscriber = observer

    },
<<<<<<< HEAD
    _callSubscriber() {
        //
    }
=======
    addMessageFromDialog() {
        this._state.MessagePage.message.push(
            {
                id: 5,
                title: this._state.MessagePage.newMessageDialog
            }
        )
        this._state.MessagePage.newMessageDialog = ''
        this._rerenderEntireTree()
    },
    UpdateTextDialog(message: string) {
        this._state.MessagePage.newMessageDialog = message;
        this._rerenderEntireTree()
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },


>>>>>>> origin/main
}


export default store;

