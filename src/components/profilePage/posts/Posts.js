import React from 'react';
import Post from "./post/Post";
import s from './Posts.module.css'

const Posts = (props)=>{

    let postsElement =
        props.posts.map(p =>
         <Post message={p.text} likes={p.likesCount}/>
    );

    let postElementRef = React.createRef();
    const addPost = ()=> {
        props.addPost();
    }

    let postChange = () => {
        let text = postElementRef.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div>
            <div className={s.postInfo}>
                <h4 align="left">New Message</h4>
                <div className={s.text}>
                    <textarea onChange={postChange} name="" id="" cols="30" rows="5" ref={postElementRef}
                    value={props.newPostText}/>
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