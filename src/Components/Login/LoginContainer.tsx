import React from 'react';
import {connect, useSelector} from 'react-redux';
import {Login} from "./Login";
import {LoginPayloadType, loginTC} from "../../Redux/reducer/auth-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {Navigate} from "react-router-dom";

type LoginContainerPropsType = {
    loginTC: (payload: LoginPayloadType) => void
    errorMessage: null | string
    error: boolean
}

const LoginContainer = (props: LoginContainerPropsType) => {

    const isLoggedIn = useSelector<AppRootStateType>(state => state.auth.isLoggedIn)

    if (isLoggedIn) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <Login {...props}/>
    );
};

let mapStateToProps = (state: AppRootStateType) => {
    return {
        errorMessage: state.auth.errorMessage,
        error: state.auth.errorAppLogin
    }
}

export default connect(mapStateToProps, {loginTC})(LoginContainer)