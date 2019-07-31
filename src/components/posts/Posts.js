import React from 'react';
import Post from "./post/Post";
import s from './Posts.module.css'

const Posts = ()=>{

    let postData = [
        {text: 'How are you?', id: 0, likesCount: 10},
        {text: 'It\'s my first post', id: 1, likesCount: 5},
        {text: 'Hello World!', id:2, likesCount: 3},
        {text: 'Speak', id:3, likesCount: 2}];

    const postsElement = postData.map(p =>{
        return <Post message={p.text} likes={p.likesCount}/>
    });

    return(
        <div>
            <div className={s.postInfo}>
                <h4 align="left">New Message</h4>
                <div className={s.text}>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                    <br/>
                    <button>Send Message</button>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        {postsElement}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts