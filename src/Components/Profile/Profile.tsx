import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";

type propsType = {
    store: any
}

export const Profile = (props: propsType) => {

    return <div className={classes.content}>
        <ProfileInfo/>
        <MyPostsContainer
            store={props.store}
        />
    </div>
}