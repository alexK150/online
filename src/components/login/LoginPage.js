import React from 'react';
import ReduxLoginForm from "./LoginForm";

const LoginPage = (props) => {
    const onSubmit =(formData)=>{

    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>;
}

export default LoginPage;