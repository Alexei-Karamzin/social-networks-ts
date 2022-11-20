import {AppRootStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsers = (state: AppRootStateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}

export const testReselect = createSelector(getUsers, getPageSize, (users: any) => {
    return users.filter( (u: any) => true)
} ) // test reselect

export const getTotalUserCount = (state: AppRootStateType) => {
    return state.usersPage.totalUserCount
}

export const getCurrentPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}