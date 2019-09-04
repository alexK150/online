import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";

export let rerenderEntireTree = (state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App
                newPostText={state.profilePage.newPostText}
                updateNewPostText={updateNewPostText}
                posts={state.profilePage.postData}
                dialogs={state.messagePage.dialogData}
                messages={state.messagePage.messageData}
                addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
}