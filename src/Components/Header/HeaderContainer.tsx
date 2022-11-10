import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {logoutTC} from "../../Redux/reducer/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    //getAuthUserData: () => void,
    logout: () => void
}

type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        //this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
})

const mapDispatchToProps = () => ({
    //getAuthUserData: getAuthUserDataTC,
    logout: logoutTC
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)