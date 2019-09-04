import {rerenderEntireTree} from "../render";

const state = {
    profilePage: {
        postData: [
            {text: 'How are you?', id: 0, likesCount: 10},
            {text: 'It\'s my first post', id: 1, likesCount: 5},
            {text: 'Hello World!', id:2, likesCount: 3},
            {text: 'Speak', id:3, likesCount: 2}],
        newPostText: ''
    },
    messagePage: {
        dialogData: [
            {name: 'Alex', id: 1},
            {name: 'Katya', id: 2},
            {name: 'Pasha', id: 3},
            {name: 'Sveta', id: 4},
            {name: 'Tanya', id: 5}],
        messageData: [
            {text: 'Hello!', id: 0},
            {text: 'How are you?', id: 1},
            {text: 'Hello World!', id: [2]}]
    }
};

export let addPost = () =>{
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText ='';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;