import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/Models/Student.model';


/*Reducer Actions */
export const load_students = createAction('[async Student List Component] LoadStudents'); 
// [async Student List Component] is nothing but a description of the action
export const remove_student = createAction('[async Student List Component] RemoveStudent',props<{student : Student}>() );
export const add_student = createAction('[async Student List Component] AddStudent',props<{student : Student}>() );
export const update_student = createAction('[async Student List Component] UpdateStudent',props<{student : Student}>() );


/*Effect Actions*/
//GET/LOAD
export const load_students_success = createAction('[Student List Component] LoadStudentSuccess',props<{students: Student[]}>());
export const load_students_failed = createAction('[Student List Component] LoadStudentFailed');
//REMOVE
export const remove_student_success = createAction('[Student List Component] RemoveStudentSuccess',props<{student:Student}>());
export const remove_student_failed = createAction('[Student List Component] RemoveStudentFailed');
//ADD
export const add_student_success = createAction('[Student List Component] AddStudentSuccess',props<{student : Student}>() );
export const add_student_failed = createAction('[Student List Component] AddStudentFailed');
//UPDATE
export const update_student_success = createAction('[Student List Component] UpdateUserSuccess',props<{student : Student}>() );
export const update_student_failed = createAction('[Student List Component] UpdateUserFailed');