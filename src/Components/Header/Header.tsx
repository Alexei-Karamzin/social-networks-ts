import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "antd";
import {useAppDispatch} from "../../Redux/redux-store";
import {logoutTC} from "../../Redux/reducer/auth-reducer";

type HeaderPropsType = {
    //isAuth: boolean
    logout: () => void
    isLoggedIn: boolean
}

export const Header = ({isLoggedIn}: HeaderPropsType) => {

    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch(logoutTC())
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
    </header>
}