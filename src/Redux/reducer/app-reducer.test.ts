import {appReducer, appReducerInitialStateType} from "./app-reducer";

let testState: appReducerInitialStateType

beforeEach(() => {
    testState = {
        isInitialized: false
    }
})

test('app should be initialized', () => {

    let newState = appReducer(testState, {type: 'APP/SET_IS_INITIALIZED', payload: true})

    expect(newState).not.toBe(testState)
    expect(newState.isInitialized).toBe(true)
})
