import React from 'react';
import Post from "./post/Post";
import s from './Posts.module.css'
import {Field, reduxForm} from "redux-form";

const Posts = (props) => {

    let postsElement =
        props.posts.map(p =>
            <Post message={p.text} likes={p.likesCount}/>
        );

    let postElementRef = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <div className={s.postInfo}>
                <h4 align="left">New Message</h4>
                <AddNewPostForm onSubmit={onAddPost}/>
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

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={s.text}>
            <Field name={"newPostText"} component='textarea'/>
            <div>
                <button>Add Post</button>
            </div>
        </div>
    </form>
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default Posts