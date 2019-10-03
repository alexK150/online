import React from 'react';
import './App.css';
import Navbar from "./components/navBar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfilePageContainer from "./components/profilePage/ProfilePageContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/Login";


const App = (props) => {
    return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer />}
                    />
                    <Route path='/profile/:userId?' render={() =>
                        <ProfilePageContainer />}
                    />
                    <Route path='/users' render={() =>
                        <UsersContainer />}/>
                    <Route path='/login' render={() =>
                        <LoginPage />}/>
                </div>
            </div>
    );
}

export default App;
