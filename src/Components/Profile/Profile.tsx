import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/store";

type ProfilePropsType = {
    profile: UserProfileType | null
    status: string | null
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    /*const isInitialized = useSelector<AppRootStateType>(state => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType>(state => state.auth.isLoggedIn)

    if(!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }*/

    return <div className={classes.content}>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
        />
        <MyPostsContainer/>
    </div>
}