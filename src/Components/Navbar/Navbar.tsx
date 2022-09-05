import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css';

export const Navbar = () => {

    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink
                to='/profile'
                className={classes.activeLink}
                style={(params) => {
                    return {color: params.isActive ? 'yellow' : 'white'}
                }}
            >
                Profile
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink
                to='/dialogs'
                className={classes.activeLink}
                style={(params) => {
                    return {color: params.isActive ? 'yellow' : 'white'}
                }}
            >
                Messages
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink
                to='/news'
                className={classes.activeLink}
                style={(params) => {
                    return {color: params.isActive ? 'yellow' : 'white'}
                }}
            >
                News
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink
                to='/music'
                className={classes.activeLink}
                style={(params) => {
                    return {color: params.isActive ? 'yellow' : 'white'}
                }}
            >
                Music
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink
                to='/settings'
                className={classes.activeLink}
                style={(params) => {
                    return {color: params.isActive ? 'yellow' : 'white'}
                }}
            >
                Settings
            </NavLink>
        </div>
        <div className={classes.item}>
            <NavLink
                to='/users'
                className={classes.activeLink}
                style={(params) => {
                    return {color: params.isActive ? 'yellow' : 'white'}
                }}
            >
                Users
            </NavLink>
        </div>
    </nav>

}