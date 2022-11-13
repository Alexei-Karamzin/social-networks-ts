import React from 'react';
import {connect} from "react-redux";
import {
    AxiosUsersType, toggleFollowTC, getUsersTC,
    setCurrentPageAC,
    toggleFollowAC, toggleFollowingProgressAC
} from "../../Redux/reducer/users-reducer";
import {Users} from "./Users";
import {AppRootStateType} from '../../Redux/redux-store';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Spin} from "antd";

type MapStatePropsType = {
    users: Array<AxiosUsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsersTC(page, this.props.pageSize)
    }

    render() {

        /*className={this.props.currentPage === el && styles.selectedPage}*/
        return (
            <>
                {this.props.isFetching && <Spin size="large" />}
                <Users
                    users={this.props.users}
                    toggleFollow={this.props.toggleFollow}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowTC={this.props.toggleFollowTC}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            toggleFollow: toggleFollowAC,
            setCurrentPage: setCurrentPageAC,
            toggleFollowingProgress: toggleFollowingProgressAC,
            getUsersTC: getUsersTC,
            toggleFollowTC: toggleFollowTC
        })
)(UsersContainer)

// types

type PropsType = {
    users: Array<AxiosUsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]

    toggleFollow: (userID: number) => void
    setCurrentPage: (page: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    toggleFollowTC: (userId: number, followed: boolean) => void
}
