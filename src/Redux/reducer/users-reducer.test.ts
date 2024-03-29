import {usersReducer} from "./users-reducer";

let testState: any

beforeEach(() => {
    testState = {
        users: [
            {
                id: 1, photoUrl: '', followed: true,
                fullName: 'Alex', status:'good',
                location: {citi: 'Grodno', country: 'Belarus'}
            },
            {
                id: 2, photoUrl: '', followed: false,
                fullName: 'Sasha', status:'good',
                location: {citi: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3, photoUrl: '', followed: true,
                fullName: 'Tim', status:'good',
                location: {citi: 'Gomel', country: 'Belarus'}
            }
        ]
    }
})

test('follow should be correct', () => {

    let newState = usersReducer(testState, {type: "USERS/TOGGLE_FOLLOW", userID: testState.users[1].id})

    expect(newState).not.toBe(testState)
    expect(newState.users.length).toBe(3)
    expect(newState.users[1].followed).toBe(!testState.users[1].followed)
    expect(newState.users[0].followed).toBe(testState.users[0].followed)
})

test('unFollow should be correct', () => {

    let newState = usersReducer(testState, {type: "USERS/TOGGLE_FOLLOW", userID: testState.users[1].id})

    expect(newState).not.toBe(testState)
    expect(newState.users.length).toBe(3)
    expect(newState.users[1].followed).toBe(!testState.users[1].followed)
    expect(newState.users[0].followed).toBe(testState.users[0].followed)
})

