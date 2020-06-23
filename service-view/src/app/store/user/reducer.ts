import { addUser, userListStore } from 'src/app/interface/user-interface';
import { UserActionTypes } from './action';

export const initialStateUser: userListStore = {
    isFetching : false,
    getUserList : [{
        _id : '',
        password : '',
        username: ''
    }]
};

export function userReducer(state = initialStateUser, action){
    switch (action.type) {
        case UserActionTypes.ListUsers:
            const userList = {
                ...state
            };
            return userList;
        case UserActionTypes.InitializeUserState:
        return {
            ...state,
            getUserList : action.payload
        };
        case UserActionTypes.RegisterUser:
        const newState = {
            ...state,
            getUserList : [...state.getUserList, action.payload]
        };
        return newState;
        default:
            return state;
    }
}
