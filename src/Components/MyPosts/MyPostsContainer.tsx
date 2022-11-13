import React from "react";
import {addPostAC} from "../../Redux/reducer/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        usersMessage: state.profilePage.posts,
        addPostAC: addPostAC
    }
}

export const MyPostsContainer = connect(mapStateToProps)(MyPosts)


/*
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
*/
