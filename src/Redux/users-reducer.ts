export type usersActionsType =
    | toggleFollowActionType
    | setUsersActionType
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof setIsFetchingAC>

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
    isFetching: boolean
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

const initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 5,
    isFetching: true
}

export const usersReducer = (state: UsersType = initialState, action: usersActionsType): UsersType => {
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
        case "SET_IS_FETCH":
            return {...state, isFetching: action.isFetch}
        default:
            return state
    }
}


export const toggleFollowAC = (userID: number): toggleFollowActionType => ({type: 'TOGGLE_FOLLOW', userID})
export const setUsersAC = (users: any): setUsersActionType => ({type: 'SET_USERS', users})
export const setCurrentPageAC = (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const)
export const setTotalUserCountAC = (count: number) => ({type: 'SET_TOTAL_USER_TYPE', count} as const)
export const setIsFetchingAC = (isFetch: boolean) => ({type: 'SET_IS_FETCH', isFetch} as const)


/*
export const AddPostAC = (): addPostActionType => {
    return {type: 'ADD-POST'}
}*/
