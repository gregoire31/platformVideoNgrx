import { Action } from '@ngrx/store';
import {  FilmDetail, authorizationDownload } from 'src/app/interface/film-interface';

export enum DetailActionTypes {
    getDetail = "[Detail] get",
    InitializeDetailState = "[Detail] initialize",
    addUserPayed = "[Detail] add user payed",
}
export class getOneDetail implements Action {
    type = DetailActionTypes.getDetail;
    constructor(public payload : string){}
}

export class initialiseStateDetail implements Action {
    type = DetailActionTypes.InitializeDetailState;
    constructor(public payload: FilmDetail){}
}

export class addUserPayed implements Action {
    type = DetailActionTypes.addUserPayed;
    constructor(public payload: authorizationDownload){}
}

