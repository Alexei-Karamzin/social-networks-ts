import {authReducer} from "./auth-reducer";

beforeEach(()=>{
    let testState = {
        id: null,
        email: null,
        login: null,
        isAuth: false
    }
})



test('update text dialog should be correct', () => {
    let testState

    let newState = authReducer(testState, {type: 'SET_USER_DATA', {'21', '122@mail', '12321'}})

    expect(newState).not.toBe(testState)
    expect(newState.newMessageDialog).toBe('Hi!')
    expect(newState.message.length).toBe(3)
})


test('add message should be correct', () => {
    let testState = {
        message: [
            {id: 1, title: 'Hello'},
            {id: 2, title: 'Hello!!!'},
            {id: 3, title: '!#$'}
        ],
        newMessageDialog: 'Hi! how old are you?',
        dialog: [
            {id: 1, name: 'Tim'},
            {id: 2, name: 'Sanya'},
            {id: 3, name: 'Lexa'},
            {id: 4, name: 'Ilya'},
            {id: 5, name: 'Kolik'}
        ]
    }

    let newState = dialogReducer(testState, {type: "ADD-MESSAGE-FROM-DIALOG"})

    expect(newState).not.toBe(testState)
    expect(newState.newMessageDialog).toBe('')
    expect(newState.message[3].title).toBe('Hi! how old are you?')
    expect(newState.message.length).toBe(4)
})
