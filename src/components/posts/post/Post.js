import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return(
        <div>
            <img className={s.avatar}src="https://avatarko.ru/img/kartinka/32/Star_Wars_pistolet_31680.jpg" alt=""/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post