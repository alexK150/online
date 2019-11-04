import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.postElement}>
            <img className={s.avatar}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAENdlQ_VCQKaW4_tF3iDbcwEVuLwEdNq_8OUQPrSMALe52nc&s"
                 alt=""/>
            {props.message}
            <div>
                <span>likes</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post