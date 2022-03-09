export type DialogType = {
    id:number,
    name:string
}
export type MessageType = {
    id:number,
    title:string
}
export type PostsType = {
    id:number,
    message:string,
    LikeCounts:number
}

export type ProfilePageType = {
    posts: Array<PostsType>
}
type MessagePageType = {
    dialog:Array<DialogType>
    message:Array<MessageType>
}

type RootStateType = {
    ProfilePage: ProfilePageType
    MessagePage: MessagePageType
}



let state : RootStateType = {
    ProfilePage:{
        posts: [
            {id:1, message:'Hello', LikeCounts:14},
            {id:2, message:'Hello, how are you?', LikeCounts:14},
            {id:3, message:'!#$', LikeCounts:184}
        ]
    },
    MessagePage: {
        message: [
            {id:1, title:'Hello'},
            {id:2, title:'Hello!!!'},
            {id:3, title:'!#$'}
        ],
        dialog: [
            {id:1, name:'Tim'},
            {id:2, name:'Sanya'},
            {id:3, name:'Lexa'},
            {id:4, name:'Ilya'},
            {id:5, name:'Kolik'}]
    }
}

export const addPost = (message:string) => {
    let newMessage = message;
    state.ProfilePage.posts.push(
        {
            id:5,
            message:newMessage,
            LikeCounts:0
        }
    )
}

export const addMessageFromDialog = (message:string) => {
    let newMessage = message;
    state.MessagePage.message.push(
        {
            id:5,
            title:newMessage
        }
    )
}

export default state;