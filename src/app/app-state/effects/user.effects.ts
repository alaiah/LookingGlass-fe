import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as loginActions from '../actions/user.actions';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';
import { getAssessmentTemplates } from '../actions/assessmentTemplate.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private appService: BackendService,
    private router: Router,
    private store: Store

  ) {}

  userLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginActions.login),
      mergeMap(action =>
        this.appService.login(action.credential).pipe(
          map(response => loginActions.loginSuccess(response)),
          catchError((error: any) => of(loginActions.loginFailure(error))))
      )
    )
  );

  loginRedirect$ = createEffect(() => {

    return this.actions$.pipe(ofType(loginActions.loginSuccess), 
    
        tap((action) => {
          //this.store.dispatch(getAssessmentTemplates());
          this.router.navigate(['/students']);
        })
      )
    },
    { dispatch: false}
  )




}