import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/Models/Course.model';
import { Student } from 'src/app/Models/Student.model';


/*Reducer Actions */
export const load_courses = createAction('[async Course List Component] LoadCourses'); 
// [async Course List Component] is nothing but a description of the action
export const remove_courses = createAction('[async Course List Component] RemoveCourse',props<{course : Course}>() );
export const add_courses = createAction('[async Course List Component] AddCourse',props<{course : Course}>() );
export const update_courses = createAction('[async Course List Component] UpdateCourse',props<{course : Course}>() );
export const add_student_to_course = createAction('[async Course List Component] AddStudentToCourse',props<{course : Course , student:Student}>() );
export const remove_student_from_course = createAction('[async Course List Component] RemoveStudentFromCourse',props<{course : Course , student:Student}>() );



/*Effect Actions*/
//GET/LOAD
export const load_courses_success = createAction('[Course List Component] LoadCourseSuccess',props<{courses: Course[]}>());
export const load_courses_failed = createAction('[Course List Component] LoadCourseFailed');
//REMOVE
export const remove_course_success = createAction('[Course List Component] RemoveCourseSuccess');
export const remove_course_failed = createAction('[Course List Component] RemoveCourseFailed');
//ADD
export const add_course_success = createAction('[Course List Component] AddCourseSuccess',props<{course : Course}>() );
export const add_course_failed = createAction('[Course List Component] AddCourseFailed');
//UPDATE
export const update_course_success = createAction('[Course List Component] UpdateCourseSuccess',props<{course : Course}>() );
export const update_course_failed = createAction('[Course List Component] UpdateCourseFailed');
// add student to course 
export const add_student_to_course_success = createAction('[Course List Component] AddStudentToCourseSuccess',props<{courses: Course[]}>());
export const add_student_to_course_failed = createAction('[Course List Component] AddStudentToCourseFailed');
// remove student from course 
export const remove_student_from_course_success = createAction('[Course List Component] RemoveStudentFromCourse',props<{courses: Course[]}>());
export const remove_student_from_course_failed = createAction('[Course List Component] RemoveStudentFromCourse');