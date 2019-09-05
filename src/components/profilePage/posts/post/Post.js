import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return(
        <div className={s.postElement}>
            <img className={s.avatar} src="https://avatarko.ru/img/kartinka/32/Star_Wars_pistolet_31680.jpg" alt=""/>
            {props.message}
            <div>
                <span>likes</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post