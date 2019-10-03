import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//turns chunk of state to props
let mapStateToProps = (state)=>{
    return{
        dialogsPage: state.messagePage,
        isAuth: state.auth.isAuth
    }
}

//sets callbacks to props
let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewMessageBody: (mesBody)=> dispatch(updateNewMessageBodyCreator(mesBody)),
        sendMessage: ()=>  dispatch(sendMessageCreator())
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer