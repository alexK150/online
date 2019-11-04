import React from 'react';
import ReduxLoginForm from "./LoginForm";
import {connect} from "react-redux";
import {loginThunkCreator} from '../../redux/auth-reducer';
import {Redirect} from "react-router-dom";

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        //login is callback to dispatch thunk creator
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>;
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

// login Thunk Creator instead of MDTP
export default connect(mapStateToProps, {loginThunkCreator})(LoginPage);