import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postData: [
        {id: 0, text: 'How are you?', likesCount: 10},
        {id: 1, text: 'It\'s my first post', likesCount: 5},
        {id: 2, text: 'Hello World!', likesCount: 3},
        {id: 3, text: 'Speak', likesCount: 2}],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}
//AC for setting user profile
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}
//Thunk for UserProfile
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
}
//Action Creator for status
export const setStatus = (statusText) => {
    return {type: SET_STATUS, status: statusText}
}

//delete AC
export const deletePost = (postId) => {
    return {type: DELETE_POST, postId}
}

//Thunk for getting status
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));
}
//Thunk for update status
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;