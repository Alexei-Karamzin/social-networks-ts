import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import classes from './Dialogs.module.css';
import { Message } from "./Message/Message";

export const Dialogs = () => {

    let dialogData = [
        {id:1, name:'Tim'},
        {id:2, name:'Sanya'},
        {id:3, name:'Lexa'},
        {id:4, name:'Ilya'},
        {id:5, name:'Kolik'}
    ]

    let messageData = [
        {id:1, title:'Hello'},
        {id:2, title:'Hello!!!'},
        {id:3, title:'!#$'}
    ]

    return <div className={classes.dialogs}>

        <div className={classes.dialogsItem}>
            {dialogData.map(element => {
               return(
                   <DialogItem DialogsDataId={element.id} DialogsDataName={element.name}/>
               )
            })}

        </div>
        <div className={classes.messages}>
            {messageData.map(m=><Message id={m.id} item={m.title} />)}

        </div>
    </div>
}