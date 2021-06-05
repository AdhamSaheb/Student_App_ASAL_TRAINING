import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap, map } from 'rxjs/operators';
import { StudentHttpService } from 'src/app/Services/Http_Services/Student-Http.service';
import * as STUDENT_ACTIONS from '../Actions/student.actions';

@Injectable()
export class StudentEffects {
    //load students
    loadStudents$ = createEffect(() => this.actions$.pipe(
        ofType(STUDENT_ACTIONS.load_students),
        switchMap(() => this.studentHttpService.getStudents()),
        switchMap((students) => of(STUDENT_ACTIONS.load_students_success({ students }))),
        catchError((err) => of(STUDENT_ACTIONS.load_students_failed()))
    )
    );
    //remove student
    removeStudent$ = createEffect(
        () => this.actions$.pipe(
            ofType(STUDENT_ACTIONS.remove_student),
            mergeMap((action) => this.studentHttpService.removeStudent(action.student).pipe(
                map(() => STUDENT_ACTIONS.remove_student_success({ student: action.student })),
                catchError((err) => of(STUDENT_ACTIONS.remove_student_failed() )
                ),
            ))

    ));
    //add student
    addStudent$ = createEffect(
        () => this.actions$.pipe(
            ofType(STUDENT_ACTIONS.add_student),
            mergeMap((action) => this.studentHttpService.addStudent(action.student).pipe(
                map((studentResponse) => STUDENT_ACTIONS.add_student_success({ student: studentResponse })),
                catchError((err) => of(STUDENT_ACTIONS.add_student_failed() )
                ),
            ))
    ));
    //update student
    updateStudent$ = createEffect(
        () => this.actions$.pipe(
            ofType(STUDENT_ACTIONS.update_student),
            mergeMap((action) => this.studentHttpService.updateStudent(action.student).pipe(
                map((studentResponse) => STUDENT_ACTIONS.update_student_success({ student: studentResponse })),
                catchError((err) => of(STUDENT_ACTIONS.update_student_failed() )
                ),
            ))
    ));


    constructor(
        private actions$: Actions,
        private studentHttpService: StudentHttpService
    ) { }
}