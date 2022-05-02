import React from 'react';
import {connect} from "react-redux";
import Users from './Users';
import {InitialStateUsersType, setUsersAC, toggleFollowAC, UserType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    users: Array<UserType>
}
type MapDispatchPropsType = {
    toggleFollow: (userID: number) => void
    setUsers: (users: InitialStateUsersType) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        toggleFollow: (userID: number) => {
            dispatch(toggleFollowAC(userID))
        },
        setUsers: (users: InitialStateUsersType) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);