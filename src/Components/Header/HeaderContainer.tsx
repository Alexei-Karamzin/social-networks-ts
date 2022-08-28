import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import { getAuthUserDataTC } from "../../Redux/reducer/auth-reducer";

type PropsType = {
    isAuth: boolean,
    getAuthUserDataTC: () => void
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserDataTC()
    }

    render() {
        return <Header isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getAuthUserDataTC: getAuthUserDataTC})(HeaderContainer)