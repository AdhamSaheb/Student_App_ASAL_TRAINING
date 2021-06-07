import { createReducer, on } from '@ngrx/store';
import * as ACTIONS from '../Actions/course.actions';
import { CourseState } from '../States/AppState.state';

export const initialState: CourseState = {
  courses: [],
  loading: true
};

const _courseReducer = createReducer(
  initialState,

/* Load Courses Actions */
    on(
    ACTIONS.load_courses,
    ACTIONS.remove_courses,
    ACTIONS.add_courses,
    ACTIONS.update_courses,
    ACTIONS.add_student_to_course,
    ACTIONS.remove_student_from_course,
    (state) =>
    ({
        ...state,
        loading: true
    })),
    /* Load Courses */
    on(
    ACTIONS.load_courses_success,
    (state, action) =>
    ({
        ...state,
        courses : action.courses,
        loading: false
    })),
    /*Add course Course Acions */
    on(
      ACTIONS.add_course_success,
      (state,action) =>
      ({
        ...state,
        courses : state.courses.concat(action.course),
        loading: false,
      })),
      /* Update Course */
    on(
      ACTIONS.update_course_success,
      (state, action) =>
      ({
        ...state,
        courses: state.courses.map(course => (course.id == action.course.id) ? action.course : course),
        loading: false
      })),
      /* Delete Course */
    on(
        ACTIONS.remove_courses, // Not sure about this one 
        (state, action) =>
        ({
          ...state,
          courses: state.courses.filter(course => course.id != action.course.id),
          loading: false
        })),
    /* Add Student To course */
    on(
      ACTIONS.add_student_to_course_success,
      (state, action) =>
      ({
        ...state,
        courses: state.courses.map(course => (course.id === action.course.id) ? action.course : course),
        loading: false
      })),
    /* remove Student from course */
    on(
      ACTIONS.remove_student_from_course_success,
      (state, action) =>
      ({
        ...state,
        courses: state.courses.map(course => (course.id === action.course.id) ? action.course : course),
        loading: false
      })),
);

export function courseReducer(state: any, action: any) {
  return _courseReducer(state, action);
}