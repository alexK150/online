import React from 'react';
import s from './ProfilePage.module.css'
import ProfilePage from "./ProfilePage";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfilePageContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setUserProfile}) (ProfilePageContainer)