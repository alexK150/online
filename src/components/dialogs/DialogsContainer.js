import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);