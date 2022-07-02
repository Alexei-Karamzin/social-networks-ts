import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean

}

export const Header = (props: any) => {
    return <header className={classes.header}>
        <div className={classes.loginButton}>
            {props.isAuth ?
                <div>You are LoginIn!</div>:
                <NavLink to={'/login'}>Login</NavLink>
            }

        </div>
        <img src='https://cdn.pixabay.com/photo/2018/03/27/15/05/logo-3266214_1280.png'/>
    </header>
}