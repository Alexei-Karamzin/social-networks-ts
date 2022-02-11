import React from "react";
import classes from './Dialogs.module.css';

export const Dialogs = () => {
    return <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
            <div className={classes.item}>Tim</div>
            <div className={classes.item}>Sanya</div>
            <div className={classes.item}>Lexa</div>
            <div className={classes.item}>Ilya</div>
            <div className={classes.item}>Kolik</div>
        </div>
        <div className={classes.messeges}>
            <div className={classes.messeg}>Hello</div>
            <div className={classes.messeg}>ifididf</div>
            <div className={classes.messeg}>dsads</div>
        </div>
    </div>
}