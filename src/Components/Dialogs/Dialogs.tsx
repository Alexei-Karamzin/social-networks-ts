import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogType, MessageType} from '../../Redux/state'

type PropsType = {
    dialogNameData: Array<DialogType>
    dialogMassageData: Array<MessageType>
    addMessageFromDialog:any
    UpdateTextDialog:(text:string)=>void
    newMessageDialog:string
}

export const Dialogs = (props: PropsType) => {

    /*let newMassageElement = React.createRef<HTMLTextAreaElement>()*/

    const onClickAddNewPostHandler = () => {
        props.addMessageFromDialog()
    }

    const onChangeMessageHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.UpdateTextDialog(e.currentTarget.value)
    }

    return <div className={classes.dialogs}>

        <div className={classes.dialogsItem}>
            {props.dialogNameData.map(element => {
                return (
                    <DialogItem DialogsDataId={element.id} DialogsDataName={element.name}/>
                )
            })}

        </div>
        <div className={classes.messages}>
            {props.dialogMassageData.map(m => <Message id={m.id} item={m.title}/>)}
            <textarea value={props.newMessageDialog} onChange={onChangeMessageHandler} />
            <button onClick={onClickAddNewPostHandler}>add massage</button>
        </div>
    </div>
}