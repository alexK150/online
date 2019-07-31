import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return(
        <div>
            <div className={s.profDescription}>
                <div>
                    img
                </div>
                <div>
                    ava+description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo