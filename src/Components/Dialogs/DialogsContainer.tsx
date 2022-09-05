import React, {ChangeEvent} from "react";
import {AddMessageFromDialogAC, UpdateTextDialogAC} from "../../Redux/reducer/dialog-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "./Dialogs";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogNameData: state.MessagePage.dialog,
        dialogMassageData: state.MessagePage.message,
        newMessageDialog: state.MessagePage.newMessageDialog,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        onClickAddNewPostHandler: ()=>{dispatch(AddMessageFromDialogAC())},
        onChangeMessageHandler: (e:ChangeEvent<HTMLTextAreaElement>)=>{dispatch(UpdateTextDialogAC(e))}
    }
}

export const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


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
