import store, {ProfilePageType} from "./state";


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


export const profileReducer = (state: ProfilePageType, action:profileActionType) => {
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