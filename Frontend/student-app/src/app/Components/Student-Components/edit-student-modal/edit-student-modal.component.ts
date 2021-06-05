import { Component, EventEmitter, Input, OnInit , Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from 'src/app/Models/Student.model';

@Component({
  selector: 'app-edit-student-modal',
  templateUrl: './edit-student-modal.component.html',
  styleUrls: ['./edit-student-modal.component.css']
})
export class EditStudentModalComponent implements OnInit {

  @Input() student : Student = new Student(-1,"",[]) ;
  @Output() updateStudentEventEmitter = new EventEmitter<Student>();

  componentStudent : Student;
  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
    this.componentStudent = new Student(this.student.id,this.student.firstName, []) ;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  emmitStudent() {
    this.updateStudentEventEmitter.emit(this.componentStudent);
    this.modalService.dismissAll();
  }
}
