import { Action } from '@ngrx/store';
import { FilmListStore, Film } from 'src/app/interface/film-interface';

export enum UserActionTypes {
    ListCatalogs = "[Catalog] list",
    InitializeCatalogsState = "[Catalog] initialize",
}
export class listAllCatalogs implements Action {
    type = UserActionTypes.ListCatalogs;
    constructor(){}
}

export class initialiseStateCatalogs implements Action {
    type = UserActionTypes.InitializeCatalogsState;
    constructor(public payload: Film[]){}
}

