import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from './message/Message'


const Dialogs = (props)=> {

    const dialogElement = props.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    });

    const messageElement = props.messages.map((message) => {
        return <Message messageText={message.text}/>
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs