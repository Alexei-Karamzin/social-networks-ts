import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "../MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo";

export const Profile = () => {

    return <div className={classes.content}>
        <ProfileInfo />
        <MyPosts />
    </div>
}