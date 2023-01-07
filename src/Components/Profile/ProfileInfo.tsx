import React from "react";
import classes from './ProfileInfo.module.css'
import {UserProfileType} from "../../trash/store";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (
    {
        profile,
        status,
        updateStatus
    }: ProfileInfoPropsType) => {

    return (
        <>
            <div className={classes.ava}>
                <img src={profile?.photos?.large}/>
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
