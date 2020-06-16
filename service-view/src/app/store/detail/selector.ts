import { createSelector } from '@ngrx/store';
import { IStore } from 'src/root.reducer';

export function getListDetails(state: IStore){
  return state.details;
}