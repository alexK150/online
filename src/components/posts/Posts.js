import React from 'react';
import Post from "./post/Post";
import s from './Posts.module.css'

const Posts = ()=>{
    return(
        <div>
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
                    <Post message={`How are you?`} likes={10}/>
                    <Post message={`It's my first post`} likes={5}/>
                    <Post message={`Hello World`} likes={3}/>
                    <Post message={`Speak`} likes={2}/>
                </div>
            </div>
        </div>
    )
}

export default Posts