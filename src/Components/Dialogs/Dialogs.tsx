import React from "react";
import classes from './Dialogs.module.css';
import {DialogItem} from "./DialogItem";
import { Message } from "./Message";

export const Dialogs = () => {
    return <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
            <DialogItem id={1} name={'Tim'}/>
            <DialogItem id={2} name={'Sanya'}/>
            <DialogItem id={3} name={'Lexa'}/>
            <DialogItem id={4} name={'Ilya'}/>
            <DialogItem id={5} name={'Kolik'}/>
        </div>
        <div className={classes.messages}>
            <Message item='Hello' />
            <Message item='Hello !!!!' />
            <Message item='Greate Bretan' />
        </div>
    </div>
}