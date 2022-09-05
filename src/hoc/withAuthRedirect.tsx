import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";

type MapStaeToPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppRootStateType): MapStaeToPropsType => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {

    const RedirectComponent = (props: MapStaeToPropsType) => {

        return <Component {...props}/>

        if (!props.isAuth) {
            return <Navigate to='/login'/>
        } else {
            return <Component {...props}/>
        }
    }

    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectAuthRedirectComponent
};
