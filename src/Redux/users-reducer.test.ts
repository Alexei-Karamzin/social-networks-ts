import {usersReducer} from "./users-reducer";

test('follow should be correct', () => {
    let testState = {
        users: [
            {id: 1, followed: true, fullName: 'Alex', location: {citi: 'Grodno', country: 'Belarus'}},
            {id: 2, followed: false, fullName: 'Sasha', location: {citi: 'Minsk', country: 'Belarus'}},
            {id: 3, followed: true, fullName: 'Tim', location: {citi: 'Gomel', country: 'Belarus'}}
        ]
    }

    let newState = usersReducer(testState, {type: "TOGGLE_FOLLOW", userID: testState.users[1].id})

    expect(newState).not.toBe(testState)
    expect(newState.users.length).toBe(3)
    expect(newState.users[1].followed).toBe(!testState.users[1].followed)
    expect(newState.users[0].followed).toBe(testState.users[0].followed)
})


