import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from './user.service';
import * as fromFeature from "./user.actions";
import { exhaustMap, map, catchError, tap, switchMap } from "rxjs/operators";
import { EMPTY, combineLatest, of } from "rxjs";
import { Store } from '@ngrx/store';
import { State } from './user.reducer';
@Injectable()

export class UserEffects {
  constructor(private store: Store<State>, private actions$: Actions, private service: UserService) {}
  getToken$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromFeature.loadUsers),
    
    // exhaustMap(
    //   () => combineLatest([this.service.get(), this.service.get1()]).pipe(
    //     map(([first, second]) => {console.log(first);console.log(second); return({first, second})}),
    //     map(resp => this.store.dispatch(fromFeature.setData({data: resp})))
    //   )
    // )
    // switchMap(action => this.service.get() 
    //   .pipe(
    //     map(res => {
    //       this.store.dispatch(fromFeature.setData({ data: res }));
    //       }),
    //     catchError(error => {fromFeature.throwError({message: error}); return error;})
    //   )
    // ),
  ), { dispatch: false});
  
}
