import {rerenderEntireTree} from "../renderJS";

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
    newMessageDialog:string
}

export type RootStateType = {
    ProfilePage: ProfilePageType
    MessagePage: MessagePageType
}

let state: RootStateType = {
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
            {id: 5, name: 'Kolik'}]
    }
}



export const addPost = () => {
    state.ProfilePage.posts.push(
        {
            id: 5,
            message: state.ProfilePage.newPostText,
            LikeCounts: 0
        }
    )
    state.ProfilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const UpdateTextPost = (text:string) => {
    state.ProfilePage.newPostText = text
    rerenderEntireTree(state)
}

export const addMessageFromDialog = () => {
    state.MessagePage.message.push(
        {
            id: 5,
            title: state.MessagePage.newMessageDialog
        }
    )
    state.MessagePage.newMessageDialog = ''
    rerenderEntireTree(state)
}

export const UpdateTextDialog = (message: string) => {
    state.MessagePage.newMessageDialog = message;
    rerenderEntireTree(state)
}







export default state;