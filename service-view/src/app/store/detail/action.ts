import { Action } from '@ngrx/store';
import {  FilmDetail, authorizationDownload } from 'src/app/interface/film-interface';

export enum DetailActionTypes {
    getDetailType = '[Detail] get',
    InitializeDetailStateType = '[Detail] initialize',
    updateDetailUserPayedType = '[Detail] update detail list'
}
export class getOneDetail implements Action {
    type = DetailActionTypes.getDetailType;
    constructor(public payload : string){}
}
export const InitializeDetailStateType = '[Detail] initialize';
export class initialiseStateDetail implements Action {
    type = InitializeDetailStateType;
    constructor(public payload: FilmDetail){}
}

export class updateDetailUserPayed implements Action {
    type = DetailActionTypes.updateDetailUserPayedType;
    constructor(public payload: authorizationDownload){}
}

