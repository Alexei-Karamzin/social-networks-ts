import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';

export const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/Profile'>Profile</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to='/Dialogs'>Messeges</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/News'>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/Music'>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/Settings'>Settings</NavLink>
        </div>
    </nav>

}