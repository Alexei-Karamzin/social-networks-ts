import React, {ChangeEvent} from "react";
import {AddPostAC, UpdateTextPostAC} from "../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export type PropsType = {
    store: any
}


export const MyPostsContainer = (props: PropsType) => {

    const usersMessage = props.store.getState().ProfilePage.posts
    const newPostText = props.store.getState().ProfilePage.newPostText

    const onClickAddPostHandler = () => {
        props.store.dispatch(AddPostAC())
    }

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(UpdateTextPostAC(e.currentTarget.value))
    }

    return (
        <MyPosts
            usersMessage={usersMessage}
            newPostText={newPostText}
            onClickAddPostHandler={onClickAddPostHandler}
            onChangeTextareaHandler={onChangeTextareaHandler}
        />
    )
}
