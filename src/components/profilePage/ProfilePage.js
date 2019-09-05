import React from 'react';
import s from './ProfilePage.module.css'
import ProfileInfo from "./profileInfo/ProfileInfo";
import Posts from "./posts/Posts";

const ProfilePage = (props) => {
    return(
        <div className={s.content}>
            <ProfileInfo/>
            <Posts
                posts={props.profilePage.postData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}/>
        </div>
    )
}

export default ProfilePage