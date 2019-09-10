const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        dialogData: [
            {id: 1, name: 'Alex' },
            {id: 2, name: 'Katya' },
            {id: 3, name: 'Pasha' },
            {id: 4, name: 'Sveta' },
            {id: 5, name: 'Tanya'}],
        messageData: [
            {id: 0, text: 'Hello!', },
            {id: 1, text: 'How are you?', },
            {id: 2, text: 'Hello World!', }
        ],
        newMessageBody: ''

}

const dialogsReducer = (state = initialState, action)=>{

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.messageBody
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messageData: [...state.messageData, {id: 3, text: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator =()=>{
    return{
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator =(text)=>{
    return{type: UPDATE_NEW_MESSAGE_BODY, messageBody: text}
}

export default dialogsReducer;