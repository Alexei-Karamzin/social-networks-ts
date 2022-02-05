import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";

export const MyPosts = () => {

    return <div className={classes.content}>
        <div className={classes.MyPosts}>My posts</div>
        <textarea></textarea>
        <button>Add posts</button>
        <Post messege='Helllo'/>
        <Post messege='Helllo, how are you?'/>
    </div>
}