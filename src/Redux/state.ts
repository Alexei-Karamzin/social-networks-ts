

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
    _state: RootStateType,
    addPost: () => void,
    UpdateTextPost: (text: string) => void,
    addMessageFromDialog: () => void,
    UpdateTextDialog: (message: string)=>void,
    _rerenderEntireTree: ()=>void,
    subscribe: (observer: () => void)=>void
    getState: ()=> void
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
    getState() {
        return this._state
    },
    addPost() {
        this._state.ProfilePage.posts.push(
            {
                id: 5,
                message: this._state.ProfilePage.newPostText,
                LikeCounts: 0
            }
        )
        this._state.ProfilePage.newPostText = ''
        this._rerenderEntireTree()
    },
    UpdateTextPost(text) {
        this._state.ProfilePage.newPostText = text
        this._rerenderEntireTree()
    },
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
    _rerenderEntireTree() {
        //
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    }
}


export default store;

