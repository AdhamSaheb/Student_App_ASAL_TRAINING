export class Student {
    id : number ; 
    firstName : string;

    constructor(id : number , firstName : string) {
        this.id = id ;
        this.firstName = firstName ; 
    }

    toString() {
        console.log("Stunet  : " + this.id +   " " + this.firstName )
    }
}


