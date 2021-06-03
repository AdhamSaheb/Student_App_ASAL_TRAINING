import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student.model';
import { StudentService } from 'src/app/Services/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  isLoading : boolean ;
  constructor( public _studentService : StudentService) {}

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
      console.log("deleted");
    }) ;
  }


}
