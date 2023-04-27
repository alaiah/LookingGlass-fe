import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../reducers";



export const selectAssessmentTemplateState = (state: AppState) => state.assessmentTemplateState;

export const getTemplates = createSelector(
  selectAssessmentTemplateState,
  (state) => state.assessmentTemplates
);

