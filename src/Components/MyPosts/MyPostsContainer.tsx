import React, {ChangeEvent} from "react";
import {addPostAC, updateTextPostAC} from "../../Redux/reducer/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";


const mapStateToProps = (state: AppRootStateType) => {
    return {
        usersMessage: state.profilePage.posts,
        addPostAC: addPostAC
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        //onClickAddPostHandler: ()=>{dispatch(addPostAC())},
        //onChangeTextareaHandler: (e:ChangeEvent<HTMLTextAreaElement>)=>{dispatch(updateTextPostAC(e))}
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
