import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "antd";
import {useAppDispatch} from "../../Redux/redux-store";
import {HeaderAvatar} from "./HeaderAvatar";
import {getUserProfileTC} from "../../Redux/reducer/profile-reducer";

type HeaderPropsType = {
    authorizedUserId: number | null
    logout: () => any
    isLoggedIn: boolean
}

export const Header = ({logout, isLoggedIn, authorizedUserId}: HeaderPropsType) => {
    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch(logout())

    }

    const goHomePage = () => {
        authorizedUserId && dispatch(getUserProfileTC(authorizedUserId))
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