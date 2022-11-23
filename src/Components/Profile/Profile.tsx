import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/store";

type ProfilePropsType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (
    {
        profile,
        status,
        updateStatus
    }: ProfilePropsType) => {

    return <div className={classes.content}>
        <ProfileInfo profile={profile}
                     status={status}
                     updateStatus={updateStatus}
        />
        <MyPostsContainer/>
    </div>
}