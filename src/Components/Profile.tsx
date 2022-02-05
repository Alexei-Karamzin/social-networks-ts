import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://images.unsplash.com/photo-1643054370512-3e1ab5e181ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'/>
        </div>
        <div className={classes.ava}>
            ava  + discription
        </div>
        <MyPosts />
    </div>
}