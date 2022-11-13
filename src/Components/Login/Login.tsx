import React from "react";
import {useFormik} from "formik";
import {loginTC} from "../../Redux/reducer/auth-reducer";
import {AppRootStateType, useAppDispatch} from "../../Redux/redux-store";
import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";


export const Login = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useSelector<AppRootStateType>(state => state.auth.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: true
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm();
        },
    })

    if (isLoggedIn) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <label htmlFor="password">password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <label htmlFor="checkbox">remember me</label>
                <button type="submit">sign in</button>
        </form>
    );
}
