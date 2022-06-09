export type usersActionsType =
    | toggleFollowActionType
    | setUsersActionType
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>

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
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 5
}


export const usersReducer = (state: UsersType /*InitialStateUsersType*/ = initialState, action: usersActionsType): UsersType/*InitialStateUsersType*/ => {
    switch (action.type) {
        case "TOGGLE_FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
            }
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.page}
        case "SET_TOTAL_USER_TYPE":
            return {...state, totalUserCount: action.count}
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

export const setCurrentPageAC = (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const)

export const setTotalUserCountAC = (count: number) => ({type: 'SET_TOTAL_USER_TYPE', count} as const)


/*
export const AddPostAC = (): addPostActionType => {
    return {type: 'ADD-POST'}
}*/
