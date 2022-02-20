import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";

export const MyPosts = () => {

    let postsData = [
        {id:1, message:'Hello', LikeCounts:14},
        {id:2, message:'Helllo, how are you?', LikeCounts:14},
        {id:3, message:'!#$', LikeCounts:184}
    ]

    return (
        <div className={classes.content}>
            <div className={classes.MyPosts}>My posts</div>
            <textarea></textarea>
            <button>Add posts</button>
            {postsData.map(p=><Post message={p.message} LikeCounts={p.LikeCounts} />
            )}
        </div>
    )
}
