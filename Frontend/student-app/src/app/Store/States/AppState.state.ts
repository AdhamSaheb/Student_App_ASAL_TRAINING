import { Student } from 'src/app/Models/Student.model';


export interface StudentState {
    students: Student[];
    loading : boolean; 
}


export interface AppState {
  students: StudentState ;
}
