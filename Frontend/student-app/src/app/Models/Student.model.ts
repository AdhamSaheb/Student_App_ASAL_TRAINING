import { Course } from "./Course.model";

export class Student {
    id : number ; 
    firstName : string;
    constructor(id : number , firstName : string) {
        this.id = id ;
        this.firstName = firstName ;
    }
    toString() {
        return "Studnet  : " + this.id +   " " + this.firstName  ;
    }
}


