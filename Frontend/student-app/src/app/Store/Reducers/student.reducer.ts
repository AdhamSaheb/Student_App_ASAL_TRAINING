import { createReducer, on } from '@ngrx/store';
import * as STUDENT_ACTIONS from '../Actions/student.actions';
import { StudentState } from '../States/AppState.state';


export const initialState: StudentState = {
  students: [],
  loading: true
};

const _studentReducer = createReducer(
  initialState,

  on(
    STUDENT_ACTIONS.remove_student,
    STUDENT_ACTIONS.load_students,
    state =>
    ({
      ...state,
      loading: true,
    })),

  on(
    STUDENT_ACTIONS.load_students_success,
    (state, action) =>
    ({
      ...state,
      students: action.students,
      loading: false
    })),

  on(
    STUDENT_ACTIONS.remove_student_success,
    (state, action) =>
    ({
      ...state,
      students: state.students.filter(student => student.id !== action.student.id),
      loading: false
    })),
  //TODO: add other actions 
);

export function studentReducer(state: any, action: any) {
  return _studentReducer(state, action);
}