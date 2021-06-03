import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/Models/Student.model';


/*Reducer Actions */

export const load_students = createAction('[async Student List Component] LoadStudents'); 
// [async Student List Component] is nothing but a description of the action
export const remove_student = createAction('[async Student List Component] RemoveStudent',props<{student : Student}>() );


/*Effect Actions*/
export const load_students_success = createAction('[Student List Component] LoadStudentSuccess',props<{students: Student[]}>());
export const load_students_failed = createAction('[Student List Component] LoadStudentFailed');
export const remove_student_success = createAction('[Student List Component] RemoveStudentSuccess',props<{student:Student}>());
export const remove_student_failed = createAction('[Student List Component] RemoveStudentFailed');
