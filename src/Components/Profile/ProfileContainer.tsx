import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {useSelector} from "react-redux";
import {getUserProfileTC, ProfileUserType} from "../../Redux/reducer/profile-reducer";
import {AppRootStateType, useAppDispatch} from "../../Redux/redux-store";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const ProfileContainer = (props: ProfileContainerType) => {


    const profile = useSelector<AppRootStateType, ProfileUserType>(state => state.profilePage.profile)
    const status = useSelector<AppRootStateType, string>(state => state.profilePage.status)
    const authorizedUserId = useSelector<AppRootStateType, number | null>(state => state.auth.id)
    const dispatch = useAppDispatch()

    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    useEffect(() => {

        let userId = Number(params.id)
        debugger
        if (!userId) {
            userId = authorizedUserId
        }
        dispatch(getUserProfileTC(userId))
        //getUserStatus(userId)
    }, [])

    return (
        <div>
            <Profile isOwner={!!profile.userId}
                     profile={profile}
                     status={status}
            />
        </div>
    )
}

/*class ProfileContainer1 extends React.Component<ProfileContainerType> {

    refreshProfile() {
        const {authorizedUserId, getUserProfile, getUserStatus, router} = this.props
        let userId = router.params.id
        if (!userId) {
            userId = authorizedUserId
            console.log(userId, '- userId', authorizedUserId, '- authorizedUserId')
            if (!userId) {
                return <Navigate to={'login'}/>
            }
        }
        getUserProfile(userId)
        //getUserStatus(userId)
    }

    componentWillMount() {
        this.refreshProfile()
    }

    componentDidMount() {
        //this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {
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

export default compose<React.ComponentType>(
    withAuthRedirect,
    WithRouter,
    connect(mapStateToProps, {
        getUserProfile: getUserProfileTC,
        getUserStatus: getUserStatusTC,
        updateUserStatus: updateUserStatusTC,
        savePhoto: savePhotoTC,
    })
)(ProfileContainer)*/

// Types

type mapStateToPropsType = {
    profile: ProfileUserType
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
type ProfileContainerType1 = mapDispatchToPropsType & mapStateToPropsType & withRouterType
type ProfileContainerType = {
    //router: any
}

export default ProfileContainer

