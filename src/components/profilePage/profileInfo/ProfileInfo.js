import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return(
        <div>
            <div className={s.profDescription}>
                <div>
                    <img className={s.avatar} src="https://avatarko.ru/img/kartinka/32/Star_Wars_pistolet_31680.jpg" align="top" hspace="10"/>Princess Leia
                </div>
                <div>
                    description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo