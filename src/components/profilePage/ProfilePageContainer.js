import React from 'react';
import s from './ProfilePage.module.css'
import ProfilePage from "./ProfilePage";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfilePageContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 1541;
        }

        this.props.getUserProfile(userId);
    }

    render(){
        if(!this.props.isAuth){
            return <Redirect to={'/login'}/>
        }

        return(
                <ProfilePage {...this.props}
                             profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state)=>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withUrlDataContainerComponent = withRouter(ProfilePageContainer);

export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent)