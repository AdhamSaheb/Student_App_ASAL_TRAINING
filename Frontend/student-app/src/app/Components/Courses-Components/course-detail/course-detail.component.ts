import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'src/app/Models/Course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() course : Course ; 
  constructor(private modalService: NgbActiveModal) { }

  ngOnInit(): void {
  }
  close() {
    this.modalService.close();
  }
  // open(content) {
  //   this.modalService.(content, {ariaLabelledBy: 'modal-basic-title'})
  // }

}
