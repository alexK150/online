import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from './message/Message'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props)=> {

    let state = props.store.getState().messagePage;

    const sendMessage = ()=> {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (mesBody) =>{
        props.store.dispatch(updateNewMessageBodyCreator(mesBody))
    }

    return <Dialogs
        updateNewMessageBody={onNewMessageChange}
        sendMessage={sendMessage}
        dialogsPage={state}/>
}

export default DialogsContainer