import React, {ChangeEvent, useState} from "react";
import classes from './ProfileInfo.module.css'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from '../../assets/images/userPhoto.png'
import {ProfileUserType, savePhotoTC, updateUserStatusTC} from "../../Redux/reducer/profile-reducer";
import {ProfileData} from "./ProfileData";
import {ProfileDataForm} from "./ProfileDataForm";
import {Button} from "antd";

type ProfileInfoPropsType = {
    isOwner: boolean
    profile: ProfileUserType
    status: string
}

export const ProfileInfo = (
    {
        profile,
        status,
        isOwner,
    }: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target?.files?.length) {
            savePhotoTC(e.target.files[0])
        }
    }

    const updateStatusHandler = (status: string) => {
        updateUserStatusTC(status)
    }

    return (
        <>
            <div className={classes.ava}>
                <img src={profile.photos.large || userPhoto}
                     className={classes.mainPhoto}/>
                {isOwner && <input type={'file'}
                                   onChange={(e) => onMainPhotoSelected(e)}/>}
                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatusHandler}
                />
                {editMode ?
                    <ProfileDataForm profile={profile}/> :
                    <ProfileData profile={profile}
                                 isOwner={isOwner}
                                 setEditMode={setEditMode}
                    />}
            </div>
        </>
    )
}



