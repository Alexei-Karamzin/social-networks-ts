import React from "react";
import classes from './ProfileInfo.module.css'

type ProfileInfoPropsType = {
    profile: any
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <>
            <div>
                <img className={classes.img} alt={''}
                     src='https://images.unsplash.com/photo-1643054370512-3e1ab5e181ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'/>
            </div>
            <div className={classes.ava}>
                <img src={props.profile?.photos?.large}/>
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
