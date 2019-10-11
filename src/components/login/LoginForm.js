import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {requiredField} from "../../validators/validators";

const LoginForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                       placeholder={'Email'}
                       component={Input}
                       name={'email'}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field type="password"
                       placeholder={'Password'}
                       component={Input}
                       name={'password'}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field component={Input}
                       name={'rememberMe'}
                       type={'checkbox'}
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