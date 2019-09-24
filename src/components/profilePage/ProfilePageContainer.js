import React from 'react';
import s from './ProfilePage.module.css'
import ProfilePage from "./ProfilePage";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfilePageContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 1541;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render(){
        return(
                <ProfilePage {...this.props}
                             profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state)=>({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfilePageContainer);

export default connect(mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent)