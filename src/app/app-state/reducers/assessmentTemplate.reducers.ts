import { Action, createReducer, on } from '@ngrx/store';
import { getAssessmentTemplates, getAssessmentTemplatesSuccess, getAssessmentTemplatesFailure } from '../actions/assessmentTemplate.actions';
import { AssessmentTemplate } from 'src/app/models/assessmentTemplate';


export interface AssessmentTemplateState {
  assessmentTemplates: AssessmentTemplate[];
  message: any;

}


const initialState: AssessmentTemplateState =  {
  assessmentTemplates: [],
  message: ''
};


const _assessmentTemplateReducer = createReducer(
  initialState,
  on(getAssessmentTemplates, (state) => {
    return {
      ...state
    }
  }),

  on(getAssessmentTemplatesSuccess, (state, data) => {
    
    return {
      ...state,
      assessmentTemplates: data.assessmentTemplates
    }
  }),

  on(getAssessmentTemplatesFailure, (state, message) => {
    
    return {
      ...state,
      message
    }
  })
  
  
);

export function assessmentTemplateReducer(state: AssessmentTemplateState, action: Action) {
  return _assessmentTemplateReducer(state, action);
}

