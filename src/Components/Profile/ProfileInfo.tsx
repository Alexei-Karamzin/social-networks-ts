import React from "react";
import classes from './ProfileInfo.module.css'
import {ProfileStatus} from "./ProfileStatus";
import {UserProfileType} from "../../Redux/store";

type ProfileInfoPropsType = {
    profile: UserProfileType | null
    status: string | null
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <>
            <div className={classes.ava}>
                <img src={props.profile?.photos?.large}/>
                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}
                />
                <div>
                    <p>About me: {props.profile?.aboutMe}</p>
                </div>
                <div>
                    <p>Full Name: {props.profile?.fullName}</p>
                </div>
                <div>
                    Social networks:
                    <div>
                        <div>
                            Facebook: {props.profile?.contacts?.facebook ? props.profile.contacts.facebook : '???'}
                        </div>
                        <div>
                            vk: {props.profile?.contacts?.vk ? props.profile.contacts.vk : '???'}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
