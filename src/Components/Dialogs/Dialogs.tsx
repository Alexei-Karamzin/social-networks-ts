import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {actionType, DialogType, MessageType} from '../../Redux/state'

type PropsType = {
    dialogNameData: Array<DialogType>
    dialogMassageData: Array<MessageType>
    dispatch:(action:actionType)=>void
    newMessageDialog:string
}

export const Dialogs = (props: PropsType) => {

    /*let newMassageElement = React.createRef<HTMLTextAreaElement>()*/

    const onClickAddNewPostHandler = () => {
        props.dispatch({type:'ADD-MESSAGE-FROM-DIALOG'})
    }

    const onChangeMessageHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:'UPDATE-TEXT-DIALOG', message:e.currentTarget.value})
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