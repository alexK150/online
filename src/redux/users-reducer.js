const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {id: 0, pictureUrl:'', followed: false, fullName: 'Alex',  status: 'hello', location: {city: 'Simf', country: 'Russia'}},
        // {id: 1, pictureUrl:'', followed: true, fullName: 'Dima',  status: 'hello1', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, pictureUrl:'', followed: false, fullName: 'David',  status: 'hello2', location: {city: 'Kiev', country: 'Ukraine'}}
        ]
}

const usersReducer = (state = initialState, action)=>{

    switch (action.type) {
        case FOLLOW: {
            return  {
                ...state,
                users: state.users.map(u =>{
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return  {
                ...state,
                users: state.users.map(u =>{
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }

}

export const followAC =(userId)=>{
    return{
        type: FOLLOW,
        userId
    }
}

export const unfollowAC =(userId)=>{
    return{type: UNFOLLOW, userId}
}

export const setUsersAC =(users)=>{
    return{type: SET_USERS, users}
}

export default usersReducer;