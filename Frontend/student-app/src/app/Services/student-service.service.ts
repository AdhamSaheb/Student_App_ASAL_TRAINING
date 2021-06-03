import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Student } from '../Models/Student.model';
import { createSelector, Store } from '@ngrx/store';
import { load_students, load_students_success, remove_student, remove_student_success } from '../Store/Actions/student.actions';
import { Actions, ofType } from '@ngrx/effects';
import { AppState, StudentState } from '../Store/States/AppState.state';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectStudentState = (state: AppState) => state.students;
 
  selectStudentList = createSelector(
    this.selectStudentState,
    (state: StudentState) => state.students
  );

  selectIsLoading = createSelector(
    this.selectStudentState,
    (state: StudentState) => state.loading
  );

  getStudents(): Observable<Student[]> {
    return this._store.select(this.selectStudentList);
  }

  getLoading(): Observable<boolean> {
    return this._store.select(this.selectIsLoading);
  }


  constructor(private _store : Store , private _actions : Actions) {
    this._store.dispatch(load_students()) ;
  }


  removeStudent(student : Student) {
    this._store.dispatch(remove_student({student: student})) ;
    return this._actions.pipe( ofType(remove_student_success))  ;
  }

}
