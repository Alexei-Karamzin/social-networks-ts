import React from "react";
import {useFormik} from "formik";
import {useAppDispatch} from "../../Redux/redux-store";
import {LoginPayloadType} from "../../Redux/reducer/auth-reducer";
import classes from './Login.module.css'

type LoginPropsType = {
    loginTC: (payload: LoginPayloadType) => any
    errorMessage: null | string
    error: boolean
}

export const Login = ({loginTC, errorMessage, error}: LoginPropsType) => {
    const dispatch = useAppDispatch()

    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: "Email is required"
                }
            }
            if (!values.password) {
                return {
                    password: "Password is required"
                }
            }
        },
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
                className={error ? classes.error : classes.standard}
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
            <label htmlFor="checkbox">remember me</label>
                <button type="submit">sign in</button>
        </form>
    );
}
