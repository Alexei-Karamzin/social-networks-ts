import {Dispatch} from "redux";
import {usersAPI} from "../../api/userAPI";

const initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 5,
    isFetching: true,
    followingInProgress: []
}

// Action

const TOGGLE_FOLLOW = "USERS/TOGGLE_FOLLOW"
const SET_USERS = "USERS/SET_USERS"
const SET_CURRENT_PAGE = "USERS/SET_CURRENT_PAGE"
const SET_TOTAL_USER_TYPE = "USERS/SET_TOTAL_USER_TYPE"
const SET_IS_FETCH = "USERS/SET_IS_FETCH"
const TOGGLE_IS_FOLLOWING_PROGRESS = "USERS/TOGGLE_IS_FOLLOWING_PROGRESS"

// Reducer

export const usersReducer = (state: UsersType = initialState, action: usersActionsType): UsersType => {
    switch (action.type) {
        case "USERS/TOGGLE_FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
            }
        case "USERS/SET_USERS":
            return {...state, users: action.users}
        case "USERS/SET_CURRENT_PAGE":
            return {...state, currentPage: action.page}
        case "USERS/SET_TOTAL_USER_TYPE":
            return {...state, totalUserCount: action.count}
        case "USERS/SET_IS_FETCH":
            return {...state, isFetching: action.isFetch}
        case "USERS/TOGGLE_IS_FOLLOWING_PROGRESS":
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

// Action Creators

export const toggleFollowAC = (userID: number): toggleFollowActionType => ({type: TOGGLE_FOLLOW, userID})
export const setUsersAC = (users: any): setUsersActionType => ({type: SET_USERS, users})
export const setCurrentPageAC = (page: number) => ({type: SET_CURRENT_PAGE, page} as const)
export const setTotalUserCountAC = (count: number) => ({type: SET_TOTAL_USER_TYPE, count} as const)
export const setIsFetchingAC = (isFetch: boolean) => ({type: SET_IS_FETCH, isFetch} as const)
export const toggleFollowingProgressAC = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

// Thunk Creators

export const requestUsersTC = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true))
    dispatch(setCurrentPageAC(page))

    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(setUsersAC(data.items))
    dispatch(setTotalUserCountAC(data.totalCount))
    dispatch(setIsFetchingAC(false))
}

export const toggleFollowTC = (userId: number, followed: boolean) => async (dispatch: Dispatch) => {
    if (followed) {
        dispatch(toggleFollowingProgressAC(true, userId))

        let res = await usersAPI.unFollow(userId)
        if (res.data.resultCode === 0) {
            dispatch(toggleFollowAC(userId))
        } else {
            console.log('Error in toggle follow TC')
        }
    } else {
        dispatch(toggleFollowingProgressAC(true, userId))

        let res = await usersAPI.follow(userId)
        if (res.data.resultCode === 0) {
            dispatch(toggleFollowAC(userId))
        } else {
            console.log('Error in toggle follow TC')
        }
    }
    dispatch(toggleFollowingProgressAC(false, userId))
}

// Types

export type usersActionsType =
    | toggleFollowActionType
    | setUsersActionType
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof setIsFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>

export type toggleFollowActionType = {
    type: 'USERS/TOGGLE_FOLLOW',
    userID: number
}
export type setUsersActionType = {
    type: 'USERS/SET_USERS',
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