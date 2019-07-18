import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = ()=> {
  return (
    <div className="App">
        <Header/>
        <Navbar/>
        <div className="content">
          <div>
            img
          </div>
        <div>
          ava+description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post_1
            </div>
            <div>
              post_2
            </div>
          </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
