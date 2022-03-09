import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostsType} from '../../Redux/state'

export type PropsType = {
    usersMessage: Array<PostsType>
    addPost:any
}

export const MyPosts = (props: PropsType) => {

    let postsElement = props.usersMessage.map(p => <Post message={p.message} LikeCounts={p.LikeCounts}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickAddPostHandler = () => {
        let text = newPostElement.current?.value;
        props.addPost(text)
    }

    return (
        <div className={classes.content}>
            <div className={classes.MyPosts}>My posts</div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={onClickAddPostHandler}>Add posts</button>
            {postsElement}
        </div>
    )
}
