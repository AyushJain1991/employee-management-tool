import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromCounter from '../user.reducer';
import { hydrationMetaReducer } from "../hydration/hydration.reducer";

export interface State {
  [fromCounter.userFeatureKey]: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCounter.userFeatureKey]: fromCounter.featureReducer
};


export const metaReducers: MetaReducer<State>[] = [hydrationMetaReducer];
