import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../Redux/reducer/profile-reducer";
import {WithRouter} from "./WithRouter";

class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.router.params.id
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfileTC(userId)
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


export default connect(mapStateToProps, {getUserProfileTC: getUserProfileTC})(WithRouter(ProfileContainer))
