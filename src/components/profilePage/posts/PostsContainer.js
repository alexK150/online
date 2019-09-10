import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps =(state)=>{
    return{
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps =(dispatch)=>{
    return{
        updateNewPostText: (text)=>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer