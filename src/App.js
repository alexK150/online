import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navBar/Navbar";
import ProfilePage from "./components/profilePage/ProfilePage";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/dialogs/message/Message";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={ProfilePage}/>*/}

                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/profile' render={() => <ProfilePage posts={props.posts}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
