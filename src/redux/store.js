import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        },
        sidebar: []
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

        this._state.profilePage =profileReducer(this._state.profilePage, action);
        this._state.messagePage= dialogsReducer(this._state.messagePage, action);
        this._state.sidebar =sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;