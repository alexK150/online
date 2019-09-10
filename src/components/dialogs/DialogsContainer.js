import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>{
//         (store) => {
//
//             let state = store.getState().messagePage;
//
//             const sendMessage = () => {
//                 store.dispatch(sendMessageCreator())
//             }
//
//             let onNewMessageChange = (mesBody) => {
//                 store.dispatch(updateNewMessageBodyCreator(mesBody))
//             }
//             return <Dialogs
//                 updateNewMessageBody={onNewMessageChange}
//                 sendMessage={sendMessage}
//                 dialogsPage={state}/>
//         }
//     }
//
//     </StoreContext.Consumer>
//
// }

//turns chunk of state to props
let mapStateToProps = (state)=>{
    return{
        dialogsPage: state.messagePage
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