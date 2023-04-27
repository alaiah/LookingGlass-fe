import { Action, createReducer, on } from '@ngrx/store';
import { getStudents, getStudentsSuccess, getStudentsFailure } from '../actions/student.actions';
import { Student } from 'src/app/models/student';


export interface StudentState {
  students: Student[];
  message: any;

}



const initialState: StudentState =  {
  students: [],
  message: ''
};

const _studentReducer = createReducer(
  initialState,
  on(getStudents, (state) => {
    return {
      ...state
    }
  }),

  on(getStudentsSuccess, (state, students: { students: Student[] }) => {
    
    return {
      ...state,
      students: students.students
    }
  }),

  on(getStudentsFailure, (state, message) => {
    
    return {
      ...state,
      message
    }
  })
  
  
);

export function studentReducer(state: StudentState, action: Action) {
  return _studentReducer(state, action);
}

