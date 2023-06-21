import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
  '[User] Load Data'
);

export const setData = createAction(
  "[User] Set Data",
  props<{ data: any; }>()
);


export const throwError = createAction(
  "[User] Throw Error",
  props<{ message: string; }>()
);

export const setUserData = createAction(
  "[User] Set User Data",
  props<{ data: any[]; }>()
);


