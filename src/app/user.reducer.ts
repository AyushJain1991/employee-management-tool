import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  data:any[];
}

export const initialState: State = {
  data : []
};

export const reducer = createReducer(
  initialState,
  on(UserActions.throwError, (state, { message }) => ({ ...state, error: message })),
  on(UserActions.setData, (state, { data }) => {
    const newData = JSON.parse(JSON.stringify(state.data)) || [] ;
    const found = newData.filter((ele: any) => ele?.email === data?.email);
    if (found.length === 0){
      newData.push(data);
    }
    return ({ ...state, data: newData })
  }),
  on(UserActions.setUserData, (state, { data }) => {
    return ({ ...state, data: data })
  }),
  on(UserActions.loadUsers, (state) => ({ ...state })),
);

export function featureReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}