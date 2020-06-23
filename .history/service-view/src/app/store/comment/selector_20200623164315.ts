import { createSelector } from '@ngrx/store';
import { IStore } from 'src/root.reducer';

export function getListComment(state: IStore){
  return state.comments;
}
