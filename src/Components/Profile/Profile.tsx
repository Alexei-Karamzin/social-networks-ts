import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";

export const Profile = () => {

    return <div className={classes.content}>
        <ProfileInfo/>
        <MyPostsContainer/>
    </div>
}