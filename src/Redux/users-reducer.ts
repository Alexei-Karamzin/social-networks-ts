export type usersActionType = toggleFollowActionType | setUsersActionType

export type toggleFollowActionType = {
    type: 'TOGGLE_FOLLOW',
    userID: number
}
export type setUsersActionType = {
    type: 'SET_USERS',
    users: any
}

export type UsersRootType = {
    users: Array<UsersType>
}

export type UsersType = {
    id: number,
    followed: boolean,
    fullName: string,
    location: {
        citi: string,
        country: string
    }
}

let initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Alex', location: {citi: 'Grodno', country: 'Belarus'}},
        {id: 2, followed: false, fullName: 'Sasha', location: {citi: 'Minsk', country: 'Belarus'}},
        {id: 3, followed: true, fullName: 'Tim', location: {citi: 'Gomel', country: 'Belarus'}}
    ]
}


export const usersReducer = (state: UsersRootType = initialState, action: usersActionType) => {
    switch (action.type) {
        case "TOGGLE_FOLLOW":
            return {
                ...state,
                /*users: state.users.map(u => {
                            if (u.id === action.userID) {
                                return {...u, followed: !u.followed}
                            } else {
                                return u
                            }
                    }
                )*/
                users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}


export const ToggleFollowAC = (userID: number): toggleFollowActionType => {
    return {type: 'TOGGLE_FOLLOW', userID}
}
export const setUsersAC = (users: any): setUsersActionType => {
    return {type: 'SET_USERS', users}
}

/*
export const AddPostAC = (): addPostActionType => {
    return {type: 'ADD-POST'}
}*/
