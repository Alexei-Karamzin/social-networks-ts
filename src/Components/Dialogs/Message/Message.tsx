import classes from "../Dialogs.module.css";
import React from "react";

type MessageType = {
    id:number,
    item:string
}

export const Message:any = (props:MessageType) => {
    return (
        <>
            <div className={classes.message}>{props.item}</div>
        </>
    )
}