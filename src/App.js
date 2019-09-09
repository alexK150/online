import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navBar/Navbar";
import ProfilePage from "./components/profilePage/ProfilePage";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";


const App = (props) => {
    return (
            <div className="App">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer />}
                    />
                    <Route path='/profile' render={() =>
                        <ProfilePage />}
                    />
                </div>
            </div>
    );
}

export default App;
