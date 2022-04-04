import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {actionType, PostsType} from '../../Redux/store';

type propsType = {
    usersMessage: Array<PostsType>
    dispatch:(action:actionType)=>void
    newPostText: string
}

export const Profile = (props: propsType) => {

    return <div className={classes.content}>
        <ProfileInfo/>
        <MyPosts
            usersMessage={props.usersMessage}
            dispatch={props.dispatch}
            newPostText={props.newPostText}
        />
    </div>
}