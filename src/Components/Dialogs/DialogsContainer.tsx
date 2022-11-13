import React from "react";
import {AddMessageFromDialogAC} from "../../Redux/reducer/dialog-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "./Dialogs";
import {compose} from "redux";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogNameData: state.MessagePage.dialog,
        dialogMassageData: state.MessagePage.message,
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        onClickAddNewPostHandler: (s: string)=>{dispatch(AddMessageFromDialogAC(s))},
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)




