import React from 'react';
import s from './Message.module.css'


const Message = (props) => {
    return <div className={s.messages}>{props.messageText}</div>
}

export default Message;