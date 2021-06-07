import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from 'src/app/Models/Student.model';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.css']
})
export class StudentModalComponent implements OnInit {
  
  @Input('student') inputStudent = new Student(-1,"");
  @Input('title') modalTitle;
  componentStudent : Student ;

  constructor(private modalService : NgbActiveModal) { }

  ngOnInit(): void {
    this.componentStudent = {...this.inputStudent} ; // clone student
  }

  close() {
    this.modalService.dismiss() ;
  }
  
  submit() {
    this.modalService.close(this.componentStudent); // send student as result to parent 
  }

}
