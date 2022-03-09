import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {MessageType, DialogType} from '../../Redux/state'

type PropsType = {
    dialogNameData: Array<DialogType>,
    dialogMassageData: Array<MessageType>,
    addMessageFromDialog:any
}

export const Dialogs = (props: PropsType) => {

    let newMassageElement = React.createRef<HTMLTextAreaElement>()

    const onClickAddNewPostHandler = () => {
        let text = newMassageElement.current?.value
        props.addMessageFromDialog(text)
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
            <textarea ref={newMassageElement}></textarea>
            <button onClick={onClickAddNewPostHandler}>add massage</button>
        </div>
    </div>
}