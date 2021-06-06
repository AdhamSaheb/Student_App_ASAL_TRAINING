import { Course } from 'src/app/Models/Course.model';
import { Student } from 'src/app/Models/Student.model';


export interface StudentState {
    students: Student[];
    loading : boolean; 
}

export interface CourseState {
    courses: Course[];
    loading : boolean; 
}


export interface AppState {
  students: StudentState ;
  courses : CourseState ;
}
