import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css';
import { Message } from "./Message/Message";
import {MessageType, DialogType} from '../../Redux/state'

type PropsType = {
    dialogNameData:Array<DialogType>,
    dialogMassageData:Array<MessageType>
}

export const Dialogs = (props:PropsType) => {


    return <div className={classes.dialogs}>

        <div className={classes.dialogsItem}>
            {props.dialogNameData.map(element => {
               return(
                   <DialogItem DialogsDataId={element.id} DialogsDataName={element.name}/>
               )
            })}

        </div>
        <div className={classes.messages}>
            {props.dialogMassageData.map(m=><Message id={m.id} item={m.title} />)}
        </div>
    </div>
}