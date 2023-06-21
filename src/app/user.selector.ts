import { State } from '../app/reducers';
import { createSelector } from '@ngrx/store';

export const selectUserState = (state: State) => state.user;
export const getUsers = createSelector(
  selectUserState,
  (state) => state.data
);