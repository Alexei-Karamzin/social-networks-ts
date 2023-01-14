import {ProfilePageType, profileReducer} from "./profile-reducer";

let testState: ProfilePageType

beforeEach(() => {
    testState = {
        posts: [
            {id: 1, message: 'Hello', LikeCounts: 14},
            {id: 2, message: 'Hello, how are you?', LikeCounts: 14},
            {id: 3, message: '!#$', LikeCounts: 184}
        ],
        profile: {
            userId: 1,
            aboutMe: '',
            lookingForAJob: true,
            lookingForAJobDescription: '',
            fullName: '',
            contacts: {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: '',
            },
            photos: {
                small: '',
                large: ''
            }
        },
        status: ''
    }
})

test('status should be set correctly', () => {

    let newState = profileReducer(testState, {type: 'PROFILE/SET_STATUS', status: 'test text'})

    expect(newState).not.toBe(testState)
    expect(newState.status).toBe('test text')
})

test('status should be updated correctly', () => {

    let newState = profileReducer(testState, {type: 'PROFILE/UPDATE_STATUS', status: 'test text'})

    expect(newState).not.toBe(testState)
    expect(newState.status).toBe('test text')
})

test('user profile should be set correctly', () => {
    let newState = profileReducer(testState, {type: 'PROFILE/SET_USER_PROFILE', profile: {
            userId: 1,
            aboutMe: '',
            lookingForAJob: true,
            lookingForAJobDescription: '',
            fullName: '',
            contacts: {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: '',
            },
            photos: {
                small: '',
                large: ''
            }
        }})

    expect(newState).not.toBe(testState)
    expect(newState.profile).toBeTruthy()
    expect(newState.profile).toBeTruthy()
})

test('post must be added correctly', ()=>{

    let newState = profileReducer(testState, {type: "PROFILE/ADD_POST", text: 'test text'})

    expect(newState).not.toBe(testState)
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe('test text')
})
