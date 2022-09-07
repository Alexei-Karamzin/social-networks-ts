import React, {ChangeEvent} from "react";
import {AddMessageFromDialogAC, UpdateTextDialogAC} from "../../Redux/reducer/dialog-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "./Dialogs";
import {compose} from "redux";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogNameData: state.MessagePage.dialog,
        dialogMassageData: state.MessagePage.message,
        newMessageDialog: state.MessagePage.newMessageDialog,
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        onClickAddNewPostHandler: ()=>{dispatch(AddMessageFromDialogAC())},
        onChangeMessageHandler: (e:ChangeEvent<HTMLTextAreaElement>)=>{dispatch(UpdateTextDialogAC(e))}
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)




