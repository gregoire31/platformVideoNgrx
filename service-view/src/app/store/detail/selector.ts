import { createSelector } from '@ngrx/store';
import { IStore } from 'src/root.reducer';

export function getListDetailFilm(state: IStore){
  return state.details;
}