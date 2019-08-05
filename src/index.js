import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const state = { arr:
        [
        {
            messages: [],
            posts: [],
            profile: {
                name: 'Dima',
                city: 'Minsk'
            }
        },
        {
            messages: [],
            posts: [],
            profile: {
                name: 'Dima',
                city: 'Minsk'
            }
        }
    ]
}

let postData = [
    {text: 'How are you?', id: 0, likesCount: 10},
    {text: 'It\'s my first post', id: 1, likesCount: 5},
    {text: 'Hello World!', id:2, likesCount: 3},
    {text: 'Speak', id:3, likesCount: 2}];

let dialogData = [
        {name: 'Alex', id: 1},
        {name: 'Katya', id: 2},
        {name: 'Pasha', id: 3},
        {name: 'Sveta', id: 4},
        {name: 'Tanya', id: 5}];


    let messageData = [
        {text: 'Hello!', id: 0},
        {text: 'How are you?', id: 1},
        {text: 'Hello World!', id: [2]}];

ReactDOM.render(<App posts={postData} dialogs={dialogData} messages={messageData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
