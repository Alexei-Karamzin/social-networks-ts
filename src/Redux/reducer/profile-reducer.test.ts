import {profileReducer} from "./profile-reducer";

/*
test('update text post should be correct', () => {
    let testState = {
        posts: [
            {id: 1, message: 'Hello', LikeCounts: 14},
            {id: 2, message: 'Hello, how are you?', LikeCounts: 14},
            {id: 3, message: '!#$', LikeCounts: 184}
        ],
        newPostText: 'init massage'
    }

    let newState = profileReducer(testState, {type: 'UPDATE-TEXT-POST', text: 'Hi!'})

    expect(newState).not.toBe(testState)
    expect(newState.newPostText).toBe('Hi!')
})

test('add post should be correct', ()=>{
    let testState = {
        posts: [
            {id: 1, message: 'Hello', LikeCounts: 14},
            {id: 2, message: 'Hello, how are you?', LikeCounts: 14},
            {id: 3, message: '!#$', LikeCounts: 184}
        ],
        newPostText: 'Hello!'
    }

    let newState = profileReducer(testState, {type: "ADD-POST"})

    expect(newState).not.toBe(testState)
    expect(newState.posts.length).toBe(4)
    expect(newState.newPostText).toBe('')
    expect(newState.posts[3].message).toBe('Hello!')
    expect(newState.posts[3].LikeCounts).toBe(0)
})*/
