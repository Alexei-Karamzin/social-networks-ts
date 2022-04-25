import React, { ChangeEvent } from "react";
import {AddMessageFromDialogAC, UpdateTextDialogAC} from "../../Redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state:any) => {
    return {
        dialogNameData: state.MessagePage.dialog,
        dialogMassageData: state.MessagePage.message,
        newMessageDialog: state.MessagePage.newMessageDialog
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        onClickAddNewPostHandler: ()=>{dispatch(AddMessageFromDialogAC())},
        onChangeMessageHandler: (e:ChangeEvent<HTMLTextAreaElement>)=>{dispatch(UpdateTextDialogAC(e))}
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


/*export const DialogsContainer = (props: PropsType) => {

    const dialogNameData = props.store.getState().MessagePage.dialog
    const dialogMassageData = props.store.getState().MessagePage.message
    const newMessageDialog = props.store.getState().MessagePage.newMessageDialog

    const onClickAddNewPostHandler = () => {
        /!*props.dispatch({type:'ADD-MESSAGE-FROM-DIALOG'})*!/
        props.store.dispatch(AddMessageFromDialogAC())
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /!*props.dispatch({type:'UPDATE-TEXT-DIALOG', message:e.currentTarget.value})*!/
        props.store.dispatch(UpdateTextDialogAC(e.currentTarget.value))
    }

    return (
        <Dialogs
            dialogNameData={dialogNameData}
            dialogMassageData={dialogMassageData}
            newMessageDialog={newMessageDialog}
            onClickAddNewPostHandler={onClickAddNewPostHandler}
            onChangeMessageHandler={onChangeMessageHandler}
        />
    )
}*/
