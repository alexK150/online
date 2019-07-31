import React from 'react';
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props)=>{
    return(
        <div className={s.dialogName + ' ' + s.active}>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
        )
}

const Message = (props)=> {
    return(
        <div className={s.message}>{props.messageText}</div>
        )
}

let dialogData = [
    {name: 'Alex', id: 1},
    {name: 'Katya', id: 2},
    {name: 'Pasha', id: 3},
    {name: 'Sveta', id: 4},
    {name: 'Tanya', id: 5}];

const dialogElement = dialogData.map((dialog)=>{
    return <DialogItem name={dialog.name} id={dialog.id}/>
})

let messageData = [
    {text: 'Hello!', id: 0},
    {text: 'How are you?', id: 1},
    {text: 'Hello World!', id:[2]}];

const messageElement = messageData.map((message)=>{
    return <Message messageText={message.text}/>
});

const Messages = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    );
};

export default Messages;