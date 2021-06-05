import { Course } from "./Course.model";

export class Student {
    id : number ; 
    firstName : string;
    courses : Course[] ; 

    constructor(id : number , firstName : string, courses : Course[]) {
        this.id = id ;
        this.firstName = firstName ;
        this.courses = courses; 
    }

    toString() {
        console.log("Stunet  : " + this.id +   " " + this.firstName )
    }
}


