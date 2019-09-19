import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return(
        <div>
            <div className={s.profDescription}>
                <div>
                    <img className={s.avatar} src="https://avatarko.ru/img/kartinka/32/Star_Wars_pistolet_31680.jpg" align="top" hspace="10"/>Princess Leia
                </div>
                <div>
                    <img src={props.profile.photos.large} alt=""/>
                    description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo