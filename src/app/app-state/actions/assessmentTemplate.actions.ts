import { createAction, props } from "@ngrx/store";
import { AssessmentTemplate } from "src/app/models/assessmentTemplate";



export const getAssessmentTemplates = createAction("[Assessment Templates] Get All Templates");
export const getAssessmentTemplatesSuccess = createAction("[Assessment Templates] Get All Templates Success", props<{ assessmentTemplates: AssessmentTemplate[] }>());
export const getAssessmentTemplatesFailure = createAction("[Assessment Templates] Get All Templates Failure", props<{message: string}>());

