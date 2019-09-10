import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

// const PostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action);
//                 }
//                 return <Posts
//                     updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     posts={store.getState().profilePage.postData}
//                     newPostText={store.getState().profilePage.newPostText}/>
//             }
//         }
//                 </StoreContext.Consumer>)
// }

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