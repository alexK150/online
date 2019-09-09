import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from './message/Message'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>{
        (store) => {

            let state = store.getState().messagePage;

            const sendMessage = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageChange = (mesBody) => {
                store.dispatch(updateNewMessageBodyCreator(mesBody))
            }
            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={sendMessage}
                dialogsPage={state}/>
        }
    }

    </StoreContext.Consumer>

}

export default DialogsContainer