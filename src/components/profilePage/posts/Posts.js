import React from 'react';
import Post from "./post/Post";
import s from './Posts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const Posts = (props)=>{

    let postsElement =
        props.posts.map(p =>
         <Post message={p.text} likes={p.likesCount}/>
    );

    let postElementRef = React.createRef();
    const addPost = ()=> {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = postElementRef.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return(
        <div>
            <div className={s.postInfo}>
                <h4 align="left">New Message</h4>
                <div className={s.text}>
                    <textarea onChange={onPostChange} name="" id="" cols="30" rows="5" ref={postElementRef}
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