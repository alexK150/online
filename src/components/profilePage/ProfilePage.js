import React from 'react';
import s from './ProfilePage.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";

const ProfilePage = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <PostsContainer
                store={props.store}
            />
        </div>
    )
}

export default ProfilePage