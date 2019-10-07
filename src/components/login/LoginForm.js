import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <>
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                       placeholder={'login'}
                       component={'input'}
                       name={'login'}
                />
            </div>
            <div>
                <Field type="text"
                       placeholder={'Password'}
                       component={'input'}
                       name={'password'}
                />
            </div>
            <div>
                <Field type="checkbox"
                       component={'checkbox'}
                       name={'rememberMe'}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </>
}

const ReduxLoginForm = reduxForm({
    //a unique name for the form
    form: 'login'
})(LoginForm)


export default ReduxLoginForm;