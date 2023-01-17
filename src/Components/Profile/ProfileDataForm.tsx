import React from "react";
import {useFormik} from "formik";
import {
    Form,
    Input,
    Checkbox
} from 'antd';
import TextArea from "antd/lib/input/TextArea";
import {useAppDispatch} from "../../Redux/redux-store";
import {editProfileTC, ProfileUserType} from "../../Redux/reducer/profile-reducer";

type ProfileDataPropsType = {
    profile: ProfileUserType
    setEditMode: (value: boolean) => void
}

export const ProfileDataForm = ({profile, setEditMode}: ProfileDataPropsType) => {

    const dispatch = useAppDispatch()

    const formik = useFormik({
        validate: (values) => {
            if (!values.aboutMe) {
                return {
                    email: "Email is required"
                }
            }
        },
        initialValues: {
            aboutMe: profile.aboutMe,
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            facebook: profile.contacts.facebook,
            website: profile.contacts.website,
            vk: profile.contacts.vk,
            twitter: profile.contacts.twitter,
            instagram: profile.contacts.instagram,
            youtube: profile.contacts.youtube,
            github: profile.contacts.github,
            mainLink: profile.contacts.mainLink,
        },
        onSubmit: values => {
            console.log(values)
            dispatch(editProfileTC(profile.userId, values))
            setEditMode(false)
            //formik.resetForm();
        },
    })

    return (
            <Form
                labelCol={{span: 5}}
                wrapperCol={{span: 14}}
                layout="horizontal"
                onSubmitCapture={formik.handleSubmit}
            >
                <Form.Item label="about me: ">
                    <TextArea rows={2}
                              id="aboutMe"
                              name="aboutMe"
                              onChange={formik.handleChange}
                              value={formik.values.aboutMe}/>
                </Form.Item>
                <Form.Item label="full name: ">
                    <Input id="fullName"
                           name="fullName"
                           onChange={formik.handleChange}
                           value={formik.values.fullName}/>
                </Form.Item>
                <Form.Item label="looking for a job:" name="lookingForAJob">
                    <Checkbox id="lookingForAJob"
                              name="lookingForAJob"
                              onChange={formik.handleChange}
                              checked={formik.values.lookingForAJob}/>
                </Form.Item>
                <Form.Item label="description: ">
                    <TextArea rows={2}
                              id="lookingForAJobDescription"
                              name="lookingForAJobDescription"
                              onChange={formik.handleChange}
                              value={formik.values.lookingForAJobDescription}/>
                </Form.Item>
                <div>contacts: </div>
                <Form.Item label="facebook: ">
                    <Input id="facebook"
                           name="facebook"
                           onChange={formik.handleChange}
                           value={formik.values.facebook}/>
                </Form.Item>
                <Form.Item label="github: ">
                    <Input id="github"
                           name="github"
                           onChange={formik.handleChange}
                           value={formik.values.github}/>
                </Form.Item>
                <Form.Item label="vk: ">
                    <Input id="vk"
                           name="vk"
                           onChange={formik.handleChange}
                           value={formik.values.vk}/>
                </Form.Item>
                <Form.Item label="instagram: ">
                    <Input id="instagram"
                           name="instagram"
                           onChange={formik.handleChange}
                           value={formik.values.instagram}/>
                </Form.Item>
                <Form.Item label="mainLink: ">
                    <Input id="mainLink"
                           name="mainLink"
                           onChange={formik.handleChange}
                           value={formik.values.mainLink}/>
                </Form.Item>
                <Form.Item label="twitter: ">
                    <Input id="twitter"
                           name="twitter"
                           onChange={formik.handleChange}
                           value={formik.values.twitter}/>
                </Form.Item>
                <Form.Item label="youtube: ">
                    <Input id="youtube"
                           name="youtube"
                           onChange={formik.handleChange}
                           value={formik.values.youtube}/>
                </Form.Item>
                <Form.Item label="website: ">
                    <Input id="website"
                           name="website"
                           onChange={formik.handleChange}
                           value={formik.values.website}/>
                </Form.Item>
                <Form.Item label="edit">
                    <button type="submit">edit</button>
                </Form.Item>
            </Form>
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