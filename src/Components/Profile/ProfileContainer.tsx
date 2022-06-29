import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {SetUserProfileAC} from "../../Redux/profile-reducer";


class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        console.log('profile')
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.SetUserProfileAC(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.ProfilePage.profile
})

export default connect(mapStateToProps, {SetUserProfileAC})(ProfileContainer)
