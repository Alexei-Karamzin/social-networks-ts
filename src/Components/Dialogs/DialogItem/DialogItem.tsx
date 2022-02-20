import {NavLink} from "react-router-dom";
import React from "react";
import classes from './DialogsItem.module.css';

type PropsType = {
    DialogsDataId:number
    DialogsDataName:string
}


export const DialogItem = (props:PropsType) => {
    return (
        <div className={classes.ItemName}>
            <NavLink to={'/Dialogs/' + props.DialogsDataId} className={classes.active}>{props.DialogsDataName}</NavLink>
        </div>
    )
}

