import React from 'react';
import s from './ProfilePage.module.css'
import ProfileInfo from "./profileInfo/ProfileInfo";
import Posts from "../posts/Posts";

const ProfilePage = () => {
    return(
        <div className={s.content}>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}

export default ProfilePage