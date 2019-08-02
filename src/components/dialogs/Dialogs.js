import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from './message/Message'


const Dialogs = (props)=> {

    let dialogData = [
        {name: 'Alex', id: 1},
        {name: 'Katya', id: 2},
        {name: 'Pasha', id: 3},
        {name: 'Sveta', id: 4},
        {name: 'Tanya', id: 5}];


    let messageData = [
        {text: 'Hello!', id: 0},
        {text: 'How are you?', id: 1},
        {text: 'Hello World!', id: [2]}];

    const dialogElement = dialogData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    });

    const messageElement = messageData.map((message) => {
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