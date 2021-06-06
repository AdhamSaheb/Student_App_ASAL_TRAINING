import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'src/app/Models/Course.model';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.css']
})
export class CourseModalComponent implements OnInit {

  @Input() inputCourse : Course ;
  @Input() title : String  = "Create a Course";
  componentCourse : Course ; 
  constructor(private modalService: NgbActiveModal) { }

  ngOnInit(): void {
    this.componentCourse = {...this.inputCourse};
  }

  submit(){
    //close modal with the course as a result 
    this.modalService.close(this.componentCourse);
  }
  
  closeModal() {
    this.modalService.dismiss();
  }


}
