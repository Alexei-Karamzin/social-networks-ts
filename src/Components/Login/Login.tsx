import React from "react";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {loginTC} from "../../Redux/reducer/auth-reducer";

export const Login = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: true
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            //dispatch(loginTC(values))
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
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />

            {/*<label htmlFor="checkbox">remember me</label>
            <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                onChange={formik.handleChange}
                value={formik.values.rememberMe}
            />*/}

            <button type="submit">Submit</button>
        </form>
    );
}