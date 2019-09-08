import React from 'react';
import s from './ProfilePage.module.css'
import ProfileInfo from "./profileInfo/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";

const ProfilePage = (props) => {
    return(
        <div className={s.content}>
            <ProfileInfo/>
            <PostsContainer
                store={props.store}
                // posts={props.profilePage.postData}
                // newPostText={props.profilePage.newPostText}
                // dispatch={props.dispatch}
            />
        </div>
    )
}

export default ProfilePage