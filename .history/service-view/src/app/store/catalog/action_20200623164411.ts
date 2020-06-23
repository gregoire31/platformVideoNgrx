import { Action } from '@ngrx/store';
import { Film } from 'src/app/interface/film-interface';

export enum CatalogActionTypes {
    ListCatalogs = '[Catalog] list',
    InitializeCatalogsState = '[Catalog] initialize',
}

export class InitialiseStateCatalogs implements Action {
    type = CatalogActionTypes.InitializeCatalogsState;
    constructor(public payload: Film[]){}
}

