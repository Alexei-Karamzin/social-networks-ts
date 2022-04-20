import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {actionType, PostsType} from '../../Redux/store'
import {AddPostAC, UpdateTextPostAC} from "../../Redux/profile-reducer";

export type PropsType = {
    usersMessage: Array<PostsType>
    newPostText: string
    onClickAddPostHandler: ()=>void
    onChangeTextareaHandler: (e:any)=>void
}


export const MyPosts = (props: PropsType) => {

    let postsElement = props.usersMessage.map(p => <Post key={p.id} message={p.message} LikeCounts={p.LikeCounts}/>)

    /*let newPostElement = React.createRef<HTMLTextAreaElement>()*/

    return (
        <div className={classes.content}>
            <div className={classes.MyPosts}>My posts</div>
            <textarea value={props.newPostText} onChange={props.onChangeTextareaHandler}/>
            <button onClick={props.onClickAddPostHandler}>Add posts</button>
            {postsElement}
        </div>
    )
}
