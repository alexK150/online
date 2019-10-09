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
}

const dialogsReducer = (state = initialState, action)=>{

    switch (action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messageData: [...state.messageData, {id: 3, text: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator =(newMessageBody)=>{
    return{
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer;