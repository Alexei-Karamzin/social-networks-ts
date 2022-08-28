import React, {ChangeEvent} from "react";
import {addPostAC, updateTextPostAC} from "../../Redux/reducer/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state: any) => {
    return {
        usersMessage: state.ProfilePage.posts,
        newPostText: state.ProfilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        onClickAddPostHandler: ()=>{dispatch(addPostAC())},
        onChangeTextareaHandler: (e:ChangeEvent<HTMLTextAreaElement>)=>{dispatch(updateTextPostAC(e))}
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


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
