import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC} from "../../Redux/reducer/profile-reducer";
import {WithRouter} from "./WithRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppRootStateType} from "../../Redux/redux-store";

class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        console.log('!!!!!!!!!!')
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

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)



const WithUrlDataComponent = WithRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfileTC: getUserProfileTC})(WithUrlDataComponent)*/

const mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile
})

const WithDataContainerComponent = WithRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps, {getUserProfileTC: getUserProfileTC})(WithDataContainerComponent))

