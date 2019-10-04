import React from 'react';
import s from './ProfilePage.module.css'
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import { withRouter} from "react-router-dom";
import WithAuthRedirect from "../../hoc/withAuthRedirect";


class ProfilePageContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 1541;
        }

        this.props.getUserProfile(userId);
    }

    render(){
        return(
                <ProfilePage {...this.props}
                             profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state)=>({
    profile: state.profilePage.profile,
})

let AuthRedirectComponent = WithAuthRedirect(ProfilePageContainer);

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent)