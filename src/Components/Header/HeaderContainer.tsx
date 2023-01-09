import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {logoutTC} from "../../Redux/reducer/auth-reducer";

type MapStateToPropsType = {
    isLoggedIn: boolean
    authorizedUserId: number | null
}

type MapDispatchToPropsType = {
    logout: () => any
}

type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {

    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isLoggedIn: state.auth.isLoggedIn,
    authorizedUserId: state.auth.id,
})

const mapDispatchToProps = () => ({
    logout: logoutTC,
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)