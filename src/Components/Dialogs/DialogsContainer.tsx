import React, {ChangeEvent} from "react";
import {AddMessageFromDialogAC, UpdateTextDialogAC} from "../../Redux/dialog-reducer";
import {Dialogs} from "./Dialogs";

type PropsType = {
    store: any
}




export const DialogsContainer = (props: PropsType) => {

    const dialogNameData = props.store.getState().MessagePage.dialog
    const dialogMassageData = props.store.getState().MessagePage.message
    const newMessageDialog = props.store.getState().MessagePage.newMessageDialog

    const onClickAddNewPostHandler = () => {
        /*props.dispatch({type:'ADD-MESSAGE-FROM-DIALOG'})*/
        props.store.dispatch(AddMessageFromDialogAC())
    }

    const onChangeMessageHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        /*props.dispatch({type:'UPDATE-TEXT-DIALOG', message:e.currentTarget.value})*/
        props.store.dispatch(UpdateTextDialogAC(e.currentTarget.value))
    }

    return (
            <Dialogs
                onClickAddNewPostHandler={onClickAddNewPostHandler}
                onChangeMessageHandler={onChangeMessageHandler}
                dialogNameData={dialogNameData}
                dialogMassageData={dialogMassageData}
                newMessageDialog={newMessageDialog}
            />
        )
}