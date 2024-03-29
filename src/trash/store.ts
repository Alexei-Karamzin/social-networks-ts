import {ProfilePageType, profileReducer} from "../Redux/reducer/profile-reducer";
import {dialogReducer} from "../Redux/reducer/dialog-reducer";

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



/*export type UserProfileType = {
    aboutMe: string
    contacts: UserContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: UserPhotoType
}*/

type UserContactsType = {
    facebook?: string
    website?: string
    vk?: string
    twitter?: string
    instagram?: string
    youtube?: string
    github?: string
    mainLink?: string
}

export type MessagePageType = {
    dialog: Array<DialogType>
    message: Array<MessageType>
}

export type RootStateType = {
    ProfilePage: ProfilePageType
    MessagePage: MessagePageType
}

export type storeType = {
    _state: RootStateType
    getState: () => RootStateType
    dispatch: (action:any) => any
    subscribe: (callback: ()=>any) => any
    _callSubscriber: () => any
}

const store: any /*storeType*/ = {
    _state: {
        profilePage: {
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
    dispatch(action: any) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.MessagePage = dialogReducer(this._state.MessagePage, action)
        this._callSubscriber()
    },

    subscribe(observer: any) {
        this._callSubscriber = observer

    },
    _callSubscriber() {
        //
    }
}






export default store;

