import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
//Action creator to set userId, email, login
export const initializedSuccess = (userId, email, login, isAuth) => ({
    type: INITIALIZED_SUCCESS,
    payload: {userId, email, login, isAuth}
});

//Thunk creator
export const initializeApp = () => (dispatch) => {
    //getAuthUserData returns Promise
    let promise = dispatch(getAuthUserData());
    //to run all promises together
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer;