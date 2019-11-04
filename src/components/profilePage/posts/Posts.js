import React from 'react';
import Post from "./post/Post";
import s from './Posts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../validators/validators";
import {TextArea} from "../../../common/FormControls/FormControls";

const Posts = React.memo(props => {

    let postsElement =
        props.posts.map(p =>
            <Post message={p.text} likes={p.likesCount}/>
        );


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <div className={s.postInfo}>
                <h4 align="left">New Post</h4>
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
})

const maxLengthCreator10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={s.text}>
            <Field name={"newPostText"} component={TextArea} validate={[requiredField, maxLengthCreator10]}/>
            <div>
                <button>Add Post</button>
            </div>
        </div>
    </form>
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default Posts