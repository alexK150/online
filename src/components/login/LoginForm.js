import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {requiredField} from "../../validators/validators";
import style from '../../common/FormControls/FormControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return <>
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [requiredField], Input)}
            {createField('Password', 'password', [requiredField], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
            <div className={style.formSummaryError}>
                {error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </>
}

export const ReduxLoginForm = reduxForm({
    //a unique name for the form
    form: 'login'
})(LoginForm)

export const createField = (placeholder, name, validator, component, props = {}, text = '') =>
    <div>
        <Field placeholder={placeholder}
               component={component}
               name={name}
               validate={validator}
               {...props}
        />{text}
    </div>