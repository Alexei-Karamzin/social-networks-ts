import {Contact} from "./Contact";
import React from "react";
import {Button} from "antd";

type ProfileDataPropsType = {
    profile: any
    isOwner: boolean
    setEditMode: (value: boolean) => void
}

export const ProfileData = ({profile, isOwner, setEditMode}: ProfileDataPropsType) => {

    return <div>
        {isOwner && <Button type="primary" onClick={() => setEditMode(true)}>Edit data</Button>}
        <div>
            <b>About me: {profile.aboutMe}</b>
        </div>
        <div>
            <b>Full Name: {profile.fullName}</b>
        </div>
        <div>
            <b>lookingForAJob: {profile.lookingForAJob ? 'yes' : 'no'}</b>
        </div>
        <div>
            <b>lookingForAJobDescription: {profile.lookingForAJobDescription}</b>
        </div>
        <div>
            <b>contacts</b>:
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key as keyof typeof profile.contacts]}
                />
            })}
        </div>
    </div>
}