import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from './message/Message'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props)=> {

    let state = props.dialogsPage;
// debugger
    const dialogElement = state.dialogData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    });

    const messageElement = state.messageData.map((message) => {
        return <Message messageText={message.text} key={message.id}/>
    });

    const sendMessage = ()=> {
        props.sendMessage();
    }

    let onNewMessageChange = (e) =>{
        let mesBody = e.target.value;
        props.updateNewMessageBody(mesBody)
    }

    let newMessageBody = state.newMessageBody;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div className={s.text}>
                    <textarea placeholder='Enter your message...'
                              value={newMessageBody}
                              onChange={onNewMessageChange} name="" id="" cols="30" rows="5" ></textarea>
                    <br/>
                    <div>
                        <button onClick={sendMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs