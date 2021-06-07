import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Course } from 'src/app/Models/Course.model';
import { Student } from 'src/app/Models/Student.model';
import { StudentService } from 'src/app/Services/Facade_Services/student-service.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() course : Course ; 
  students: Student[]= [] ;
  studentOptions : Student[] ;
  disabledStudent : Student =  new Student(-1,"none",[]) ; // student inside the selector, set to none by default 
  selectedStudent : Student  = this.disabledStudent ;
  constructor(private modalService: NgbActiveModal , public studentService : StudentService) { }

  ngOnInit(): void {
     this.studentService.getStudents().subscribe((response) => this.students =response );
     const enrolledStudentsIds = this.course.enrolledStudents.map((student) => student.id);
     this.studentOptions = this.students.filter((student)=> !enrolledStudentsIds.includes(student.id) );
  }

  close() {
    this.modalService.close();
  }

  addStudentToCourse(student : Student) {
    //when modal closed with result, the result is the student added to the course
    //type of operation was sent to tell if its add or delete user from session 
    this.modalService.close({ type  : "ADD" , course : this.course , student : student }) ;
  }

  removeStudentFromCourse(student : Student) {
    //when modal closed with result, the result is the student added to the course
    //type of operation was sent to tell if its add or delete user from session 
    this.modalService.close({ type  : "DELETE" , course : this.course , student : student }) ;
  }



}
