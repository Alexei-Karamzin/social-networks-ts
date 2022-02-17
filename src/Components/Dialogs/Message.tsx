import classes from "./Dialogs.module.css";
import React from "react";

type PropsType = {
    item:string
}

export const Message = (props:PropsType) => {
    return (
        <>
            <div className={classes.messeg}>{props.item}</div>
        </>
    )
}