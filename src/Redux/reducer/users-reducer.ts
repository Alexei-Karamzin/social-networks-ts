import {Dispatch} from "redux";
import {usersAPI} from "../../api/userAPI";

export type usersActionsType =
    | toggleFollowActionType
    | setUsersActionType
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof setIsFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>

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
    followingInProgress: any[]
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
    isFetching: true,
    followingInProgress: []
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
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}


export const toggleFollowAC = (userID: number): toggleFollowActionType => ({type: 'TOGGLE_FOLLOW', userID})
export const setUsersAC = (users: any): setUsersActionType => ({type: 'SET_USERS', users})
export const setCurrentPageAC = (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const)
export const setTotalUserCountAC = (count: number) => ({type: 'SET_TOTAL_USER_TYPE', count} as const)
export const setIsFetchingAC = (isFetch: boolean) => ({type: 'SET_IS_FETCH', isFetch} as const)
export const toggleFollowingProgressAC = (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId
} as const)

/*
export const AddPostAC = (): addPostActionType => {
    return {type: 'ADD-POST'}
}*/

// thunks

export const requestUsersTC = (page: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true))
    dispatch(setCurrentPageAC(page))

    usersAPI.getUsers(page, pageSize)
        .then(data => {
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUserCountAC(data.totalCount))
            dispatch(setIsFetchingAC(false))
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const toggleFollowTC = (userId: number, followed: boolean) => (dispatch: Dispatch) => {
    if (followed) {
        dispatch(toggleFollowingProgressAC(true, userId))
        usersAPI.unFollow(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(toggleFollowAC(userId))
                } else {
                    console.log('Error in toggle follow TC')
                }
                dispatch(toggleFollowingProgressAC(false, userId))
            })
    } else {
        dispatch(toggleFollowingProgressAC(true, userId))
        usersAPI.follow(userId)
            .then(res => {
                if (res.data.resultCode == 0) {
                    dispatch(toggleFollowAC(userId))
                } else {
                    console.log('Error in toggle follow TC')
                }
                dispatch(toggleFollowingProgressAC(false, userId))
            })
    }
}