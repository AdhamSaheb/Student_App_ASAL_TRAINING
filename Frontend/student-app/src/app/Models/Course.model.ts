import { Student } from "./Student.model";

export class Course {

    constructor(
        public id : number ,
        public  name : string,
        public enrolledStudents : Student[] ,
        public maximumParticipants: number
        ) {}

    toString() {
        console.log("Course  : " + this.id +   " " + this.name, + "Max : " + this.maximumParticipants ) ;
    }
}


