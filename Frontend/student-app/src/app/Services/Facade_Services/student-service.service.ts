import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { createSelector, Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { AppState, StudentState } from 'src/app/Store/States/AppState.state';
import { Student } from 'src/app/Models/Student.model';
import { add_student, add_student_success, load_students, remove_student, remove_student_success, update_student, update_student_success } from 'src/app/Store/Actions/student.actions';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //select the state, so that you can then select parts of it 
  selectStudentState = (state: AppState) => state.students;
 
  /* Select needed parts of the sate */
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

  /*Student CRUD called from components*/
  removeStudent(student : Student) {
    this._store.dispatch(remove_student({student: student})) ;
    return this._actions.pipe( ofType(remove_student_success))  ;
  }

  addStudent( student : Student){
    this._store.dispatch(add_student({student: student})) ;
    return this._actions.pipe( ofType(add_student_success))  ;
  }
  updateStudent( student : Student){
    this._store.dispatch(update_student({student: student})) ;
    return this._actions.pipe( ofType(update_student_success))  ;
  }

}
