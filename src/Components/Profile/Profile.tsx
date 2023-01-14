import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../Redux/reducer/profile-reducer";

type ProfilePropsType = {
    isOwner: boolean
    profile: ProfileUserType
    status: string
}

export const Profile = (
    {
        profile,
        status,
        isOwner,
    }: ProfilePropsType) => {

    return <div className={classes.content}>
        <ProfileInfo profile={profile}
                     status={status}
                     isOwner={isOwner}
        />
        <MyPostsContainer/>
    </div>
}