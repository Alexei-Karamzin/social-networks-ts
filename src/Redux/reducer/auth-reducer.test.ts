import {authInitialStateType, authReducer} from "./auth-reducer";

let testState: authInitialStateType

beforeEach(()=>{
    testState = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        isLoggedIn: false,
        errorMessage: null,
        errorAppLogin: false,
        captchaUrl: null
    }
})

test('update text dialog should be correct', () => {

    let newState = authReducer(testState, {type: 'AUTH/LOGIN'})

    expect(newState).not.toBe(testState)
    expect(newState.isLoggedIn).toBe(true)
})


