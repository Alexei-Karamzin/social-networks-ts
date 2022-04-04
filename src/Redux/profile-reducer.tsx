import store, {ProfilePageType} from "./store";


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
    newPostText: 'add massage'
}


export const profileReducer = (state: ProfilePageType = initialState, action:profileActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
                state.posts.push(
                    {
                        id: 5,
                        message: state.newPostText,
                        LikeCounts: 0
                    }
                )
                state.newPostText = ''
            return state
        }

        case 'UPDATE-TEXT-POST': {
            state.newPostText = action.text
            return  state
        }
        default:
            return state
    }
}

export const UpdateTextPostAC = (text:string):'UPDATE-TEXT-POST' =>{
    return store.dispatch({type:'UPDATE-TEXT-POST', text:text})
}
export const AddPostAC = ():addPostActionType =>{
    return store.dispatch({type:'ADD-POST'})
}