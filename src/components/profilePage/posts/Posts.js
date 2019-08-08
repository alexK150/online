import React from 'react';
import Post from "./post/Post";
import s from './Posts.module.css'

const Posts = (props)=>{

    const postsElement = props.posts.map(p =>{
        return <Post message={p.text} likes={p.likesCount}/>
    });

    let postElementRef = React.createRef();
        debugger;
    const addPost = ()=> {
        let text = postElementRef.current.value;
        props.addPost(text);
    }

    return(
        <div>
            <div className={s.postInfo}>
                <h4 align="left">New Message</h4>
                <div className={s.text}>
                    <textarea name="" id="" cols="30" rows="5" ref={postElementRef}></textarea>
                    <br/>
                    <button onClick={addPost}>Send Message</button>
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