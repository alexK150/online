import React from 'react';
import Post from "./post/Post";

const Posts = ()=>{
    return(
        <div>
            <h4 align="left">My Post</h4>
            <div>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <br/>
                <button>Add Post</button>
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <Post message={`How are you?`}/>
                    <Post message={`It's my first post`}/>
                    <Post message={`Hello World`}/>
                    <Post message={`Speak`}/>
                </div>
            </div>
        </div>
    )
}

export default Posts