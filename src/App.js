import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/navBar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/LoginPage";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from './hoc/withSuspense';

//Lazy Load
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfilePageContainer = React.lazy(() => import('./components/profilePage/ProfilePageContainer'));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfilePageContainer)}/>
                    <Route path='/users' render={() =>
                        <UsersContainer/>}/>
                    <Route path='/login' render={() =>
                        <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp;