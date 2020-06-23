import { ActionReducerMap } from '@ngrx/store';
import { userListStore } from './app/interface/user-interface';
import { FilmListStore, FilmListStoreDetail } from './app/interface/film-interface';
import { userReducer } from './app/store/user/reducer'
import { catalogReducer } from './app/store/catalog/reducer'
import { detailFilmReducer } from './app/store/detail/reducer'
import { CommentStore } from './app/interface/comment-interface';
import { commentReducer } from './app/store/comment/reducer';

export interface IStore {
    users: userListStore;
    catalogs: FilmListStore;
    details : FilmListStoreDetail;
    comments: CommentStore;
  }

export const reducers: ActionReducerMap<IStore> = {
    users: userReducer,
    catalogs: catalogReducer,
    details : detailFilmReducer,
    comments: commentReducer
  };
