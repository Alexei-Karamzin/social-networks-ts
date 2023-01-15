import React from "react";
import {useFormik} from "formik";

type ProfileDataPropsType = {
    profile: any
}

export const ProfileDataForm = ({profile}: ProfileDataPropsType) => {

    const formik = useFormik({
        validate: (values) => {
            if (!values.aboutMe) {
                return {
                    email: "Email is required"
                }
            }
        },
        initialValues: {
            aboutMe: ''
            //email: '',
            //password: '',
            //rememberMe: true
        },
        onSubmit: values => {
            //dispatch(loginTC(values))
            formik.resetForm();
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="aboutMe">About me</label>
            <input
                id="aboutMe"
                name="aboutMe"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.aboutMe}
            />
        </form>
        /*<form onSubmit={formik.handleSubmit}>
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
        </form>*/
    );
}