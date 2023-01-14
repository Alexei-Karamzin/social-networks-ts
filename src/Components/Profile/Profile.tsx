import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import {UserProfileType} from "../../trash/store";

type ProfilePropsType = {
    isOwner: boolean
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (e: any) => void
}

export const Profile = (
    {
        profile,
        status,
        updateStatus,
        isOwner,
        savePhoto,
    }: ProfilePropsType) => {

    return <div className={classes.content}>
        <ProfileInfo profile={profile}
                     status={status}
                     updateStatus={updateStatus}
                     isOwner={isOwner}
                     savePhoto={savePhoto}
        />
        <MyPostsContainer/>
    </div>
}