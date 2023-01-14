import React, { ChangeEvent } from "react";
import classes from './ProfileInfo.module.css'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from '../../assets/images/userPhoto.png'
import {ProfileUserType, savePhotoTC, updateUserStatusTC} from "../../Redux/reducer/profile-reducer";
import {Contact} from "./Contact";

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

    const onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target?.files?.length) {
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
                { isOwner && <input type={'file'}
                                    onChange={(e) => onMainPhotoSelected(e)}/> }
                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatusHandler}
                />
                <div>
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
            </div>
        </>
    )
}

type ProfileDataPropsType = {

}

