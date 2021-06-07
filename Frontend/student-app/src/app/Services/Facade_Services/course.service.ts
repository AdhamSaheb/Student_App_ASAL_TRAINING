import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from 'src/app/Models/Course.model';
import { Student } from 'src/app/Models/Student.model';
import { add_courses, add_course_success, add_student_to_course, add_student_to_course_success, load_courses, remove_courses, remove_course_success, remove_student_from_course, remove_student_from_course_success, update_courses, update_course_failed, update_course_success } from 'src/app/Store/Actions/course.actions';
import { add_student_success, update_student_success } from 'src/app/Store/Actions/student.actions';
import { AppState, CourseState } from 'src/app/Store/States/AppState.state';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private _store : Store , private _actions : Actions) { 
    this._store.dispatch(load_courses());
  }

  selectCoursesState = (state: AppState) => state.courses;
 
  /* Selectors */
  selectLoading = createSelector(
    this.selectCoursesState,
    (state: CourseState) => state.loading
  );

  selectCourses = createSelector(
    this.selectCoursesState,
    (state: CourseState) => state.courses
  );

  getCourses(): Observable<Course[]> {
    return this._store.select(this.selectCourses);
  }

  getLoading(): Observable<boolean> {
    return this._store.select(this.selectLoading);
  }

  /*CRUD */
  addCourse(course : Course) : Observable<Course[]> {
     this._store.dispatch( add_courses({course : course}));
     return this._actions.pipe( ofType(add_course_success))  ;
  }

  updateCourse(course : Course) : Observable<Course>{
    this._store.dispatch(update_courses({course:course})) ;
    return this._actions.pipe(ofType(update_course_success));
  }

  deleteCourse(course : Course) : Observable<Course>{
    this._store.dispatch(remove_courses({course:course})) ;
    return this._actions.pipe(ofType(remove_course_success));
  }
  /* Extra */
  addStudentToCourse(course : Course , student : Student) {
    this._store.dispatch(add_student_to_course( {course : course,student : student} )) ;
    return this._actions.pipe(ofType(add_student_to_course_success));
  }
  removeStudentFromCourse(course : Course , student : Student) {
    this._store.dispatch(remove_student_from_course( {course : course,student : student} )) ;
    return this._actions.pipe(ofType(remove_student_from_course_success));
  }

  
}
