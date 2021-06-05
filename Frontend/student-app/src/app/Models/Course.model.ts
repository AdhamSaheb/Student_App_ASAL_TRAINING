import { Student } from "./Student.model";

export class Course {
    id : number ; 
    name : string;
    enrolledStudents : Student[] ; 
    

    constructor(id : number , firstName : string, enrolledStudents : Student[]) {
        this.id = id ;
        this.name = firstName ; 
        this.enrolledStudents = enrolledStudents;
    }

    toString() {
        console.log("Stunet  : " + this.id +   " " + this.name )
    }
}


