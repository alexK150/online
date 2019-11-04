import React from 'react';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    postData: [
        {id: 0, text: 'How are you?', likesCount: 10},
        {id: 1, text: 'It\'s my first post', likesCount: 5},
        {id: 2, text: 'Hello World!', likesCount: 3},
        {id: 3, text: 'Speak', likesCount: 2}],
}

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('action');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expected result
    expect(newState.postData.length).toBe(5)
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('message-test');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expected result
    expect(newState.postData[4].text).toBe('message-test');
});

it('after delete function length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expected result
    expect(newState.postData.length).toBe(3);
});

it('after deleting length shouldn\'t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expected result
    expect(newState.postData.length).toBe(4);
});