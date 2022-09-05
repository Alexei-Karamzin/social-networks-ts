import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogType, MessageType} from '../../Redux/store'

type PropsType = {
    dialogNameData: Array<DialogType>
    dialogMassageData: Array<MessageType>
    newMessageDialog: string
    onClickAddNewPostHandler: () => void
    onChangeMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Dialogs = (props: PropsType) => {

    return <div className={classes.dialogs}>

        <div className={classes.dialogsItem}>
            {props.dialogNameData.map(element => {
                return (
                    <DialogItem key={element.id} DialogsDataId={element.id} DialogsDataName={element.name}/>
                )
            })}

        </div>
        <div className={classes.messages}>
            {props.dialogMassageData.map(m => <Message key={m.id} id={m.id} item={m.title}/>)}
            <textarea value={props.newMessageDialog} onChange={props.onChangeMessageHandler}/>
            <button onClick={props.onClickAddNewPostHandler}>add massage</button>
        </div>
    </div>
}