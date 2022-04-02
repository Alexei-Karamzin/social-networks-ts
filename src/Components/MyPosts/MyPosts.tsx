import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {actionType, PostsType} from '../../Redux/state'

export type PropsType = {
    usersMessage: Array<PostsType>
    dispatch: (action:actionType) => void
    newPostText: string
}

export const MyPosts = (props: PropsType) => {

    let postsElement = props.usersMessage.map(p => <Post key={p.id} message={p.message} LikeCounts={p.LikeCounts}/>)

    /*let newPostElement = React.createRef<HTMLTextAreaElement>()*/

    const onClickAddPostHandler = () => {
        props.dispatch({type:'ADD-POST'})
    }

    const onChangeTextareaHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:'UPDATE-TEXT-POST', text:e.currentTarget.value})
    }

    return (
        <div className={classes.content}>
            <div className={classes.MyPosts}>My posts</div>
            <textarea value={props.newPostText} onChange={onChangeTextareaHandler}/>
            <button onClick={onClickAddPostHandler}>Add posts</button>
            {postsElement}
        </div>
    )
}
