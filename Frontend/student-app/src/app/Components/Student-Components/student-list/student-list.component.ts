import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/Models/Student.model';
import { StudentService } from 'src/app/Services/Facade_Services/student-service.service';
import { ConfirmationModalComponent } from '../../Courses-Components/confirmation-modal/confirmation-modal.component';
import { StudentModalComponent } from '../student-modal/student-modal.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  isLoading : boolean ;
  constructor( public _studentService : StudentService ,
               private modalService : NgbModal,
               private toastr : ToastrService ) {}

  ngOnInit(): void {
      this._studentService.getStudents().subscribe((studentsLoaded)=> {
      this.students =studentsLoaded ; 
    });
      this._studentService.getLoading().subscribe((isLoading) => {
      this.isLoading= isLoading ;
    } ) ;
  }

  onDeleteStudentClicked(student :  Student) {
    const modalRef = this.modalService.open(ConfirmationModalComponent) ;
    modalRef.componentInstance.title = "Are you sure ? " ; 
    modalRef.componentInstance.message = "Are you sure you want to delete " + student.firstName  + "?" ;
    modalRef.result.then((res) => {
        this._studentService.removeStudent(student).subscribe((successState)=> {
        this.toastr.success("Student Removed");
      });
    });
  }

  openCreateStudentModal() {
    const modalRef = this.modalService.open(StudentModalComponent, {backdrop: 'static'});
    modalRef.componentInstance.modalTitle = 'Create a new Student' ;
    modalRef.result.then((student)=> {
        this._studentService.addStudent(student).subscribe(()=> {
        this.toastr.success('User Created Successfully');
      });
    });
  }

  openEditStudentModal(student : Student) {
    const modalRef = this.modalService.open(StudentModalComponent, {backdrop: 'static'});
    modalRef.componentInstance.modalTitle = 'Edit ' +  student.firstName ;
    modalRef.componentInstance.inputStudent = student ;
    modalRef.result.then((student)=> {
        this._studentService.updateStudent(student).subscribe(()=> {
        this.toastr.success('User Updated Successfully');
      });
    });
  }


}
