import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, tap, mergeMap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';
import * as studentActions from '../actions/student.actions';
import { Student } from 'src/app/models/student';

@Injectable()
export class StudentEffects {

    constructor(private actions$: Actions, 
        private appService: BackendService) {}

    getStudents$: Observable<{ students: Student[] }> = createEffect((): any => 

        this.actions$.pipe(

            ofType(studentActions.getStudents),
            mergeMap(() => this.appService.getStudents()
                .pipe(
                    map(data => studentActions.getStudentsSuccess(data)),
                    catchError(error => of(studentActions.getStudentsFailure(error)))
                )

            )
        )
    ); 
  
}