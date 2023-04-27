import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import * as assessmentTemplateActions from  "../actions/assessmentTemplate.actions";

import { BackendService } from "src/app/services/backend.service";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { Observable, of } from "rxjs"
import { AssessmentTemplate } from "src/app/models/assessmentTemplate";

@Injectable()
export class AssessmentTemplateEffects {

    constructor(private actions$: Actions, private appService: BackendService) {}

    getAssessmentTemplates$: Observable<{ assessmentTemplates: AssessmentTemplate[]}> = createEffect((): any => 
        this.actions$.pipe(
            ofType(assessmentTemplateActions.getAssessmentTemplates),
            mergeMap(() =>
                this.appService.getAssessmentTemplates().pipe(

                    map(data => assessmentTemplateActions.getAssessmentTemplatesSuccess(data)),
                    catchError((error: any) => of(assessmentTemplateActions.getAssessmentTemplatesFailure(error)))
                )
            )  
        )
    )                          



}