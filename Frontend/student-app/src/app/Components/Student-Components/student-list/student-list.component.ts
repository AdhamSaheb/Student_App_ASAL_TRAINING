import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student.model';
import { StudentService } from 'src/app/Services/Facade_Services/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  isLoading : boolean ;
  constructor( public _studentService : StudentService ) {}

  ngOnInit(): void {
      this._studentService.getStudents().subscribe((studentsLoaded)=> {
      this.students =studentsLoaded ; 
    });
    this._studentService.getLoading().subscribe((isLoading) => {
      this.isLoading= isLoading ;
    } ) ;
  }
  onDeleteStudentClicked(student :  Student) {
    this._studentService.removeStudent(student).subscribe((successState)=> {
      //do something when removed, a toast maybe
    }) ;
  }
  //handles the event emitter of add student
  createStudent( firstName : string){
    console.log("Parent Caught: " + firstName) ;
    var student = new Student(-1,firstName,[]);
    this._studentService.addStudent(student).subscribe(  (successState)=> {
      //do something when added, a toast maybe
    } );
  }

  //handles the event emitter 
  updateStudent( student : Student){
    console.log("Parent Caught: " + student.toString()) ;
    this._studentService.updateStudent(student).subscribe(  (successState)=> {
      //do something when added, a toast maybe
    } );
  }


}
