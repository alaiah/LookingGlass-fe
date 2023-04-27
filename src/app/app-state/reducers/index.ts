import { ActionReducerMap } from "@ngrx/store";
import { AssessmentTemplateState, assessmentTemplateReducer } from "./assessmentTemplate.reducers";
import { UserState, userReducer } from "./user.reducers";
import { StudentState, studentReducer } from "./student.reducers";

export interface AppState {
  userState: UserState;
  assessmentTemplateState: AssessmentTemplateState;
  studentState: StudentState
}

export const reducers: ActionReducerMap<any> = {
  userState: userReducer,
  assessmentTemplateState: assessmentTemplateReducer,
  studentState: studentReducer
};
