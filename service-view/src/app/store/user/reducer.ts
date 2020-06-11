import { addUser, userListStore } from 'src/app/interface/user-interface';
import { UserActionTypes } from './action'
import { strictEqual } from 'assert';

const initialState: userListStore = {
    getUserList : [{
        _id : '',
        password : '',
        username: ''
    }]
}

export function reducer(state = initialState, action){
    switch (action.type) {
        case UserActionTypes.ListUsers:
            const userList = {
                ...state
            };
        console.log(userList);
        return userList;
        case UserActionTypes.InitializeUserState:
        return {
            ...state,
            getUserList : action.payload
        }
        case UserActionTypes.RegisterUser:
            
        const newState = {
            ...state,
            getUserList : [...state.getUserList, action.payload]
        }
        // console.log(addUser);
        return newState;
        default:
            return state;
    }
}