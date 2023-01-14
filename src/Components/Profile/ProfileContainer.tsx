import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, getUserStatusTC, savePhotoTC, updateUserStatusTC} from "../../Redux/reducer/profile-reducer";
import {WithRouter} from "./WithRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppDispatchType, AppRootStateType} from "../../Redux/redux-store";
import {compose} from "redux";
import {UserProfileType} from "../../trash/store";

class ProfileContainer extends React.Component<ProfileContainerType> {

    refreshProfile() {
        const {authorizedUserId, getUserProfile, getUserStatus, router} = this.props
        let userId = router.params.id
        if (!userId) {
            userId = authorizedUserId
            if (!userId) {
                //<Navigate to={'login'} /> redirect if no autorized
            }
        }
        getUserProfile(userId)
        getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
        debugger
        if (this.props.profile?.userId != prevProps.profile?.userId) {
            this.refreshProfile()
        }
    }

    updateStatusHandler = (value: string) => {
        const {updateUserStatus} = this.props
        updateUserStatus(value)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!!this.props.profile?.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.updateStatusHandler}
                         savePhoto={this.props.savePhoto}
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
    updateUserStatus: (value: string) => dispatch(updateUserStatusTC(value)),
    savePhoto: (file: any) => dispatch(savePhotoTC(file)),
})

export default compose<React.ComponentType>(
    withAuthRedirect,
    WithRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer)

// Types

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
    savePhoto: (file: any) => void
}
type ProfileContainerType = mapDispatchToPropsType & mapStateToPropsType & withRouterType
