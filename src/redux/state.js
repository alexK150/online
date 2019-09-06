const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    //private methods
    _state :{
        profilePage: {
            postData: [
                {id: 0, text: 'How are you?',  likesCount: 10},
                {id: 1, text: 'It\'s my first post',  likesCount: 5},
                {id:2, text: 'Hello World!',  likesCount: 3},
                {id:3, text: 'Speak',  likesCount: 2}],
            newPostText: ''
        },
        messagePage: {
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
    },
    _callSubscriber  () {
        console.log('State changed')
    },

    //methods that are not changing state
    getState(){
        return this._state;
    },
    subscribe  (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action){
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText ='';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            store._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.messagePage.newMessageBody = action.messageBody;
            this._callSubscriber(this._state);
        }else if(action.type === SEND_MESSAGE){
            let body = this._state.messagePage.newMessageBody;
            this._state.messagePage.newMessageBody = '';
            this._state.messagePage.messageData.push({id: 3, text: body });
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator =()=>{
    return{
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator =(text)=>{
    return{type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const sendMessageCreator =()=>{
    return{
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator =(text)=>{
    return{type: UPDATE_NEW_MESSAGE_BODY, messageBody: text}
}


export default store;
window.store = store;