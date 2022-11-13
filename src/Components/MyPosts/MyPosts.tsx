import React from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {PostsType} from '../../Redux/store'
import {useFormik} from "formik";
import {useAppDispatch} from "../../Redux/redux-store";
import { AnyAction } from "redux";

export type PropsType = {
    usersMessage: Array<PostsType>
    addPostAC: (text: string) => AnyAction // ?
}

export const MyPosts = (props: PropsType) => {
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            text: '',
        },
        onSubmit: values => {
            //alert(JSON.stringify(values.text, null, 2));
            dispatch(props.addPostAC(values.text))
            formik.resetForm();
        },
    })

    let postsElement = props.usersMessage.map(p => <Post key={p.id}
                                                         message={p.message}
                                                         LikeCounts={p.LikeCounts}
    />)

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={classes.content}>
                <div className={classes.MyPosts}>My posts</div>
                <textarea id="text"
                          name="text"
                          onChange={formik.handleChange}
                          value={formik.values.text}
                />
                <button type="submit">Add posts</button>
                {postsElement}
            </div>
        </form>
    )
}
