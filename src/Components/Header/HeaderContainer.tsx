import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../Redux/reducer/auth-reducer";
import {AppRootStateType} from "../../Redux/redux-store";

export class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
              if (response.data.resultCode === 0) {
                  let {id,email,login} = response.data.data
                  this.props.setAuthUserDataAC({id,email,login})
              }
            })
    }

    render() {
        //@ts-ignore
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)