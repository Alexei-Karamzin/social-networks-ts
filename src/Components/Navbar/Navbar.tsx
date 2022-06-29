import React from "react";
import { NavLink } from "react-router-dom";
import { MessageBtn } from "./MassegeBtn";
import classes from './Navbar.module.css';
import { ProfileBtn } from "./ProfileBtn";

export const Navbar = () => {

    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile' className={classes.activeLink}>Profile<ProfileBtn /></NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' className={classes.activeLink}>Messages<MessageBtn /></NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news' className={classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/music' className={classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' className={classes.activeLink}>Settings</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/users' className={classes.activeLink}>Users</NavLink>
        </div>
    </nav>

}