import { Action } from '@ngrx/store';
import { FilmListStore, Film } from 'src/app/interface/film-interface';

export enum CatalogActionTypes {
    ListCatalogs = "[Catalog] list",
    InitializeCatalogsState = "[Catalog] initialize",
}
export class listAllCatalogs implements Action {
    type = CatalogActionTypes.ListCatalogs;
    constructor(){}
}

export class initialiseStateCatalogs implements Action {
    type = CatalogActionTypes.InitializeCatalogsState;
    constructor(public payload: Film[]){}
}

