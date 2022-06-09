export type usersActionType = toggleFollowActionType | setUsersActionType

export type toggleFollowActionType = {
    type: 'TOGGLE_FOLLOW',
    userID: number
}
export type setUsersActionType = {
    type: 'SET_USERS',
    users: any
}

export type InitialStateUsersType = {
    users: Array<UserType>
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        citi: string
        country: string
    }
}

export type UsersType = {
    users: Array<AxiosUsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

export type AxiosUsersType = {
    name: string
    id: number
    photos: PhotoType
    status: string
    followed: boolean
}

export type PhotoType = {
    small: string
    large: string
}


const initialState: UsersType /*InitialStateUsersType*/ = {
    users: [ ],
    pageSize: 5,
    totalUserCount: 21,
    currentPage: 1
}


export const usersReducer = (state: UsersType /*InitialStateUsersType*/ = initialState, action: usersActionType): UsersType/*InitialStateUsersType*/ => {
    switch (action.type) {
        case "TOGGLE_FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
            }
        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}


export const toggleFollowAC = (userID: number): toggleFollowActionType => {
    return {type: 'TOGGLE_FOLLOW', userID}
}
export const setUsersAC = (users: any): setUsersActionType => {
    return {type: 'SET_USERS', users}
}

/*
export const AddPostAC = (): addPostActionType => {
    return {type: 'ADD-POST'}
}*/
