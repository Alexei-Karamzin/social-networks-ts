import React from 'react';
import {connect} from "react-redux";
import {
    AxiosUsersType, toggleFollowTC, requestUsersTC,
    setCurrentPageAC, toggleFollowingProgressAC
} from "../../Redux/reducer/users-reducer";
import {Users} from "./Users";
import {AppRootStateType} from '../../Redux/redux-store';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {Spin} from "antd";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUsers
} from "../../Redux/users-selectors";

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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            setCurrentPage: setCurrentPageAC,
            toggleFollowingProgress: toggleFollowingProgressAC,
            getUsersTC: requestUsersTC,
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
