import { ActionReducerMap } from '@ngrx/store';
import { userListStore } from './app/interface/user-interface';
import { FilmListStore } from './app/interface/film-interface';
import { userReducer } from './app/store/user/reducer'
import { catalogReducer } from './app/store/catalog/reducer'
export interface IStore {
    users: userListStore;
    catalogs: FilmListStore;
  }


export const reducers: ActionReducerMap<IStore> = {
    users: userReducer,
    catalogs: catalogReducer
  };
