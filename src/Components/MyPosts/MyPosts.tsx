import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import { PostsType } from '../../Redux/state'

export type PropsType = {
    usersMessage:Array<PostsType>
}

export const MyPosts = (props:PropsType) => {
    return (
        <div className={classes.content}>
            <div className={classes.MyPosts}>My posts</div>
            <textarea></textarea>
            <button>Add posts</button>
            {props.usersMessage.map(p=><Post message={p.message} LikeCounts={p.LikeCounts} />
            )}
        </div>
    )
}
