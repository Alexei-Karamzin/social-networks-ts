import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "antd";
import {useAppDispatch} from "../../Redux/redux-store";
import {HeaderAvatar} from "./HeaderAvatar";

type HeaderPropsType = {
    authorizedUserId: number | null
    logout: () => any
    isLoggedIn: boolean
    getUserProfile: (userId: number) => any
}

export const Header = ({logout, getUserProfile, isLoggedIn, authorizedUserId}: HeaderPropsType) => {
    console.log(authorizedUserId)
    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    const id = authorizedUserId ? authorizedUserId : 1
    const goHomePage = () => {
        dispatch(getUserProfile(id))
    }

    return <header className={classes.header}>
        <div className={classes.loginButton}>
            {isLoggedIn ?
                <div>
                    <Button onClick={logoutHandler}>
                        Logout
                    </Button>
                </div> :
                <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
        <img src='https://cdn.pixabay.com/photo/2018/03/27/15/05/logo-3266214_1280.png'/>
        <HeaderAvatar goHomePage={goHomePage}/>
    </header>
}