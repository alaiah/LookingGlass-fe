import { createAction, props } from "@ngrx/store";
import { Student } from "src/app/models/student";


export const getStudents = createAction("[Student] Get All Students");
export const getStudentsSuccess = createAction("[Student] Get All Students Success", props<{ students: Student[]}>());
export const getStudentsFailure = createAction("[Student] Get All Students Failure", props<{ message: string }>());
