import {profileReducer} from "./profile-reducer";
import {ProfilePageType} from "../store";

let testState: ProfilePageType

beforeEach(() => {
    testState = {
        posts: [
            {id: 1, message: 'Hello', LikeCounts: 14},
            {id: 2, message: 'Hello, how are you?', LikeCounts: 14},
            {id: 3, message: '!#$', LikeCounts: 184}
        ],
        profile: null,
        status: ''
    }
})

test('update text post should be correct', () => {

    let newState = profileReducer(testState, {type: 'PROFILE/UPDATE_POST_TEXT', text: 'Hi!'})

    expect(newState).not.toBe(testState)
    expect(newState).toBe('Hi!')
})

test('post must be added correctly', ()=>{

    let newState = profileReducer(testState, {type: "PROFILE/ADD_POST", text: 'test text'})

    expect(newState).not.toBe(testState)
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe('test text')
})
