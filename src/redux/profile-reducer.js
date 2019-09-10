const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        postData: [
            {id: 0, text: 'How are you?',  likesCount: 10},
            {id: 1, text: 'It\'s my first post',  likesCount: 5},
            {id:2, text: 'Hello World!',  likesCount: 3},
            {id:3, text: 'Speak',  likesCount: 2}],
        newPostText: ''
}

const profileReducer = (state = initialState, action)=>{

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                likesCount: 0
            }
            return  {
                ...state,
                postData : [...state.postData, newPost],
                newPostText : ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText : action.newText
            };
        }
        default:
            return state;
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


export default profileReducer;