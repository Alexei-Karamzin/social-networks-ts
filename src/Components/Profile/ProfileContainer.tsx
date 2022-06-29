import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {SetUserProfileAC} from "../../Redux/profile-reducer";
import {WithRouter} from "./WithRouter";


class ProfileContainer extends React.Component<any> {



    componentDidMount() {
        debugger
        let profileId = this.props.router.params.id
        if (!profileId) {
            profileId = 2
        }
        console.log('profile')
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
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



export default connect(mapStateToProps, {SetUserProfileAC})(WithRouter(ProfileContainer))
