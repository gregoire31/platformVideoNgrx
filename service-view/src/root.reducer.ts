import { ActionReducerMap } from '@ngrx/store';
import { userListStore } from './app/interface/user-interface';
import { FilmListStore, FilmListStoreDetail } from './app/interface/film-interface';
import { userReducer } from './app/store/user/reducer'
import { catalogReducer } from './app/store/catalog/reducer'
import { detailReducer } from './app/store/detail/reducer'
export interface IStore {
    users: userListStore;
    catalogs: FilmListStore;
    details : FilmListStoreDetail;
  }


export const reducers: ActionReducerMap<IStore> = {
    users: userReducer,
    catalogs: catalogReducer,
    details : detailReducer
  };
