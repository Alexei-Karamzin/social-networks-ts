import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/store";

type ProfilePropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return <div className={classes.content}>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}
        />
        <MyPostsContainer/>
    </div>
}