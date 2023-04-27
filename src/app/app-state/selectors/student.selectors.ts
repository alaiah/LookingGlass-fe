import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers";

const selectStudentState = (state: AppState) => state.studentState;

export const getStudents = createSelector(
    selectStudentState,
    (state) => state.students
  );
