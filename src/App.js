import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navBar/Navbar";
import ProfilePage from "./components/profilePage/ProfilePage";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props) => {
    return (
            <div className="App">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <Dialogs
                            dialogs={props.state.messagePage.dialogData}
                            messages={props.state.messagePage.messageData}
                        />}
                    />
                    <Route path='/profile' render={() =>
                        <ProfilePage
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}
                    />
                </div>
            </div>
    );
}

export default App;
