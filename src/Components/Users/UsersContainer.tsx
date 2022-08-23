import React from 'react';
import {connect} from "react-redux";
import {
    AxiosUsersType, getUsersTC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUserCountAC,
    setUsersAC,
    toggleFollowAC, toggleFollowingProgressAC,
    UsersType
} from "../../Redux/reducer/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {AppRootStateType} from '../../Redux/redux-store';
import {usersAPI} from "../../api/api";

type MapStatePropsType = {
    users: Array<AxiosUsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]
}
type MapDispatchPropsType = {
    toggleFollow: (userID: number) => void
    setUsers: (users: UsersType) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetch: boolean) => void
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(page)
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {

        /*className={this.props.currentPage === el && styles.selectedPage}*/
        return (
            <>
                <Preloader isFetching={this.props.isFetching}/>
                <Users
                    users={this.props.users}
                    toggleFollow={this.props.toggleFollow}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
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

export default connect(mapStateToProps,
    {
        toggleFollow: toggleFollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setTotalUserCountAC,
        setIsFetching: setIsFetchingAC,
        toggleFollowingProgress: toggleFollowingProgressAC,
        getUsersTC: getUsersTC
    }
)(UsersContainer);

// types

type PropsType = {
    users: Array<AxiosUsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]

    toggleFollow: (userID: number) => void
    setUsers: (users: UsersType) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetch: boolean) => void
    toggleFollowingProgress: (i:boolean)=>void
    getUsersTC: (currentPage: number, pageSize: number) => void
}
