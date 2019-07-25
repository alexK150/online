import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navBar/Navbar";
import ProfilePage from "./components/profilePage/ProfilePage";
import Dialogs from "./components/dialogs/Dialogs";

const App = ()=> {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        {/*<ProfilePage/>*/}
        <Dialogs/>
    </div>
  );
}

export default App;
