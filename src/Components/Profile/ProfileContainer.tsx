import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, getUserStatusTC, updateUserStatusTC} from "../../Redux/reducer/profile-reducer";
import {WithRouter} from "./WithRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppRootStateType} from "../../Redux/redux-store";
import {compose} from "redux";
import {UserProfileType} from "../../Redux/store";

type mapStateToPropsType = {
    profile: UserProfileType | null
    status: string | null
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
        let userId = this.props.router.params.id
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateUserStatus}
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

const mapDispatchToProps = () => ({
    getUserProfile: getUserProfileTC,
    getUserStatus: getUserStatusTC,
    updateUserStatus: updateUserStatusTC
})

export default compose<React.ComponentType>(
    withAuthRedirect,
    WithRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer)

