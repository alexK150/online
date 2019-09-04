import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navBar/Navbar";
import ProfilePage from "./components/profilePage/ProfilePage";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {addPost} from "./redux/state";


const App = (props) => {
    debugger
    return (
            <div className="App">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <Dialogs
                            dialogs={props.dialogs}
                            messages={props.messages}
                        />}
                    />
                    <Route path='/profile' render={() =>
                        <ProfilePage
                            posts={props.posts}
                            newPostText={props.newPostText}
                            addPost={addPost}
                            updateNewPostText={props.updateNewPostText}
                        />}
                    />
                </div>
            </div>
    );
}

export default App;
