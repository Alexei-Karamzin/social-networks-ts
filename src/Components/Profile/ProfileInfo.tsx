import React, { ChangeEvent } from "react";
import classes from './ProfileInfo.module.css'
import {UserProfileType} from "../../trash/store";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from '../../assets/images/userPhoto.png'

type ProfileInfoPropsType = {
    isOwner: boolean
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (e: any) => void
}

export const ProfileInfo = (
    {
        profile,
        status,
        updateStatus,
        isOwner,
        savePhoto
    }: ProfileInfoPropsType) => {

    const onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target?.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <>
            <div className={classes.ava}>
                <img src={profile?.photos.large || userPhoto}
                     className={classes.mainPhoto}/>
                { isOwner && <input type={'file'}
                                    onChange={(e) => onMainPhotoSelected(e)}/> }
                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}
                />
                <div>
                    <p>About me: {profile?.aboutMe}</p>
                </div>
                <div>
                    <p>Full Name: {profile?.fullName}</p>
                </div>
                <div>
                    Social networks:
                    <div>
                        <div>
                            Facebook: {profile?.contacts?.facebook ? profile.contacts.facebook : '???'}
                        </div>
                        <div>
                            vk: {profile?.contacts?.vk ? profile.contacts.vk : '???'}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
