import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap, map } from 'rxjs/operators';
import { CourseHttpService } from 'src/app/Services/Http_Services/course-http.service';
import * as ACTIONS from '../Actions/course.actions';

@Injectable()
export class CoursesEffects {
    //load courses
    loadCourses$ = createEffect(() => this.actions$.pipe(
        ofType(ACTIONS.load_courses),
        switchMap(() => this.coursesHttpService.getCourses()),
        switchMap((courses) => of(ACTIONS.load_courses_success({ courses }))),
        catchError((err) => of(ACTIONS.load_courses_failed()))
    )
    );
    addCourse$ = createEffect(
        () => this.actions$.pipe(
            ofType(ACTIONS.add_courses),
            mergeMap((action) => this.coursesHttpService.addCourse(action.course).pipe(
                map((response) => ACTIONS.add_course_success({ course: response })), // or use the action.course
                catchError((err) => of(ACTIONS.add_course_failed())
                ),
            ))
    ));
    updateCourse$ = createEffect(
        () => this.actions$.pipe(
            ofType(ACTIONS.update_courses),
            mergeMap((action) => this.coursesHttpService.updateCourse(action.course).pipe(
                map((response) => ACTIONS.update_course_success({ course: response })), // or use the action.course
                catchError((err) => of(ACTIONS.update_course_failed())
                ),
            ))
    ));
    removeCourse$ = createEffect(
        () => this.actions$.pipe(
            ofType(ACTIONS.remove_courses),
            mergeMap((action) => this.coursesHttpService.removeCourse(action.course).pipe(
                map(() => ACTIONS.remove_course_success()), // or use the action.course
                catchError((err) => of(ACTIONS.remove_course_failed())
                ),
            ))
    ));
    addStudentToCourse$ = createEffect(
        () => this.actions$.pipe(
            ofType(ACTIONS.add_student_to_course),
            mergeMap((action) => this.coursesHttpService.addStudentToCourse(action.course,action.student).pipe(
                map((response) => ACTIONS.add_student_to_course_success({course : response})), // or use the action.course
                catchError((err) => of(ACTIONS.add_student_to_course_failed())
                ),
            ))
    ));
    removeStudentFromCourse$ = createEffect(
        () => this.actions$.pipe(
            ofType(ACTIONS.remove_student_from_course),
            mergeMap((action) => this.coursesHttpService.removeStudentFromCourse(action.course,action.student).pipe(
                map((response) => ACTIONS.remove_student_from_course_success({course : response})), // or use the action.course
                catchError((err) => of(ACTIONS.remove_student_from_course_failed())
                ),
            ))
    ));




    constructor(
        private actions$: Actions,
        private coursesHttpService: CourseHttpService 
    ) { }
}