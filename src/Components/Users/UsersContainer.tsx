import React from 'react';
import {connect} from "react-redux";
import Users from './Users';
import {AxiosUsersType, setUsersAC, toggleFollowAC, UsersType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import UsersClassComponent from './UsersClassComponent';


type MapStatePropsType = {
    users: Array<AxiosUsersType>
    pageSize: number
    totalUserCount: number
}
type MapDispatchPropsType = {
    toggleFollow: (userID: number) => void
    setUsers: (users: UsersType) => void
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        toggleFollow: (userID: number) => {
            dispatch(toggleFollowAC(userID))
        },
        setUsers: (users: UsersType) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);