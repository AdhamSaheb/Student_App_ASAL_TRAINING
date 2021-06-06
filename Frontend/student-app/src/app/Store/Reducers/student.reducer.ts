import { createReducer, on } from '@ngrx/store';
import * as STUDENT_ACTIONS from '../Actions/student.actions';
import { StudentState } from '../States/AppState.state';


export const initialState: StudentState = {
  students: [],
  loading: true
};

const _studentReducer = createReducer(
  initialState,
/* Load students Actions */
  on(
    STUDENT_ACTIONS.load_students_success,
    (state, action) =>
    ({
      ...state,
      students: action.students,
      loading: false
    })),

    /*Remove Student Acions */
  on(
    STUDENT_ACTIONS.remove_student,
    STUDENT_ACTIONS.load_students,
    state =>
    ({
      ...state,
      loading: true,
    })),
  on(
    STUDENT_ACTIONS.remove_student_success,
    (state, action) =>
    ({
      ...state,
      students: state.students.filter(student => student.id !== action.student.id),
      loading: false
    })),
  /*Add student actions */
  on(
    STUDENT_ACTIONS.add_student,
    (state) =>
    ({
      ...state,
      loading: true
    })),
    on(
      STUDENT_ACTIONS.add_student_success,
      (state, action) =>
      ({
        ...state,
        students: state.students.concat(action.student),
        loading: false
      })),
    /* Edit Student Actions */
    on(
      STUDENT_ACTIONS.update_student,
      (state) =>
      ({
        ...state,
        loading: true
      })),
      on(
        STUDENT_ACTIONS.update_student_success,
        (state, action) =>
        ({
          ...state,
          students: state.students.map(student => (student.id == action.student.id) ? action.student : student ),
          loading: false
        })),
);

export function studentReducer(state: any, action: any) {
  return _studentReducer(state, action);
}



//TODO : refactor all the actions that set loading to true in one action