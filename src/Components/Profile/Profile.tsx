import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "../MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo";
import {PostsType, UpdateTextPost} from '../../Redux/state'

type propsType = {
    usersMessage:Array<PostsType>
    addPost:any
    UpdateTextPost:(text:string)=>void
    newPostText:string
}

export const Profile = (props:propsType) => {



    return <div className={classes.content}>
        <ProfileInfo />
        <MyPosts
            usersMessage={props.usersMessage}
            addPost={props.addPost}
            UpdateTextPost={UpdateTextPost}
            newPostText={props.newPostText}
        />
    </div>
}