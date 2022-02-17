import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css';

export const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/Profile' className={classes.activeLink}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/Dialogs' className={classes.activeLink}>Messeges</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/News' className={classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/Music' className={classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/Settings' className={classes.activeLink}>Settings</NavLink>
        </div>
    </nav>

}