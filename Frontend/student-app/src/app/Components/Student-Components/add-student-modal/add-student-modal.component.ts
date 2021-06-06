import { Output , Input } from '@angular/core';
import {Component,EventEmitter} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Student } from 'src/app/Models/Student.model';

@Component({
  selector: 'app-add-student-modal',
  templateUrl: './add-student-modal.component.html',
  styleUrls: ['./add-student-modal.component.css']
})

export class AddStudentModalComponent {
   firstName : string = "" ;
   @Output() addStudentEventEmitter = new EventEmitter<string>();
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  emmitStudent() {
    this.addStudentEventEmitter.emit(this.firstName);
    this.modalService.dismissAll();
  }

}


//TODO : ask waleed on how to reuse your form 
