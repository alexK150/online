let store = {
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
                {id: 2, text: 'Hello World!', }]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber  () {
        console.log('State changed')
    },
    addPost  () {
        let newPost = {
            id: 5,
            text: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText ='';
        this._callSubscriber(this._state);
    },
    updateNewPostText  (newText) {
        store._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe  (observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;