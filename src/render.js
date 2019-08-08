import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state'
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";

export let rerenderEntireTree = ()=>{
    ReactDOM.render(
        <BrowserRouter>
            <App
                posts={state.profilePage.postData}
                dialogs={state.messagePage.dialogData}
                messages={state.messagePage.messageData}
                addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
}