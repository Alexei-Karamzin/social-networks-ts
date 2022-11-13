import React from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogType, MessageType} from '../../Redux/store'
import {AddMessageForm} from "./Message/AddMessageForm";

type PropsType = {
    dialogNameData: Array<DialogType>
    dialogMassageData: Array<MessageType>
    onClickAddNewPostHandler: (e: string) => void
}

export const Dialogs = (props: PropsType) => {

    return <div style={{display: 'flex'}}>

        <div style={{borderRight: '2px solid #34050a',paddingLeft: '30px',paddingTop: '30px,color: #fdfdfd'}}>
            {props.dialogNameData.map(element => <DialogItem key={element.id}
                                                             DialogsDataId={element.id}
                                                             DialogsDataName={element.name}
                    />
                )
            }

        </div>
        <AddMessageForm dialogMassageData={props.dialogMassageData}
                        onClickAddNewPostHandler={props.onClickAddNewPostHandler}
        />

    </div>
}

