import {NavLink} from "react-router-dom";
import React from "react";
import classes from './DialogsItem.module.css';

type PropsType = {
    DialogsDataId:number
    DialogsDataName:string
}

export const DialogItem = ({DialogsDataId, DialogsDataName}:PropsType) => {
    return (
        <div className={classes.ItemName}>
            <NavLink to={'/Dialogs/' + DialogsDataId} className={classes.active}>{DialogsDataName}</NavLink>
        </div>
    )
}

