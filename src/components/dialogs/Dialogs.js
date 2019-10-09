import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from './message/Message'
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let state = props.dialogsPage;
    let newMessageBody = state.newMessageBody;

    const dialogElement = state.dialogData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    });

    const messageElements = state.messageData.map((message) => {
        return <Message messageText={message.text} key={message.id}/>
    });

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <ReduxAddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form className={s.text} onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'}
                       placeholder='Enter your message...'/>
            </div>
            <br/>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const ReduxAddMessageForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);


export default Dialogs