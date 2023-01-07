import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, getUserStatusTC, updateUserStatusTC} from "../../Redux/reducer/profile-reducer";
import {WithRouter} from "./WithRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppDispatchType, AppRootStateType} from "../../Redux/redux-store";
import {compose} from "redux";
import {UserProfileType} from "../../trash/store";

type mapStateToPropsType = {
    profile: UserProfileType | null
    status: string
    authorizedUserId: number
    isAuth: boolean
}

type withRouterType = {
    router: { location: any, navigate: any, params: any }
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

type ProfileContainerType = mapDispatchToPropsType & mapStateToPropsType & withRouterType

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        const {authorizedUserId, getUserProfile, getUserStatus, router} = this.props
        let userId = router.params.id
        console.log(userId)
        if (!userId) {
            userId = authorizedUserId
        }
        getUserProfile(userId)
        getUserStatus(userId)
    }

    updateStatusHandler = (value: string) => {
        const {updateUserStatus} = this.props
        updateUserStatus(value)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.updateStatusHandler}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = (dispatch: AppDispatchType) => ({
    getUserProfile: (userId: number) => getUserProfileTC(userId),
    getUserStatus: (userId: number) => dispatch(getUserStatusTC(userId)),
    updateUserStatus: (value: string) => dispatch(updateUserStatusTC(value))
})

export default compose<React.ComponentType>(
    withAuthRedirect,
    WithRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer)

