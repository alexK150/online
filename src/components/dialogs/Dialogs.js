import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from './message/Message'


const Dialogs = (props)=> {

    let messageElementRef = React.createRef();

    const sendMessage = ()=> {
        let text = messageElementRef.current.value;
        alert(text);
    }

    const dialogElement = props.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    });

    const messageElement = props.messages.map((message) => {
        return <Message messageText={message.text} key={message.id}/>
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div className={s.text}>
                    <textarea name="" id="" cols="30" rows="5" ref={messageElementRef}></textarea>
                    <br/>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs