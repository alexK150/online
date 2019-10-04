import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/withAuthRedirect";

//turns chunk of state to props
let mapStateToProps = (state)=>{
    return{
        dialogsPage: state.messagePage,
    }
}

//sets callbacks to props
let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewMessageBody: (mesBody)=> dispatch(updateNewMessageBodyCreator(mesBody)),
        sendMessage: ()=>  dispatch(sendMessageCreator())
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer