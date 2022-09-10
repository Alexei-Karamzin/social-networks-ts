import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import {UserProfileType} from "../../Redux/store";

type ProfilePropsType = {
    profile: UserProfileType
}

export const Profile = (props: ProfilePropsType) => {

    return <div className={classes.content}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}