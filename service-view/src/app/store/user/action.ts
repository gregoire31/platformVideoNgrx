import { Action } from '@ngrx/store';
import { addUser, userList } from 'src/app/interface/user-interface';

export enum UserActionTypes {
    ListUsers = "[User] list",
    InitializeUserState = "[User] initialize",
    RegisterUser = "[User] Register"
}
export class listAllUsers implements Action {
    type = UserActionTypes.ListUsers;
    constructor(){}
}

export class initialiseStateUser implements Action {
    type = UserActionTypes.InitializeUserState;
    constructor(public payload: userList[]){}
}

export class RegisterUser implements Action {
    type = UserActionTypes.RegisterUser;
    constructor(public payload: addUser){}
}