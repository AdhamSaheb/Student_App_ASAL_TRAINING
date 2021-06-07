import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'src/app/Models/Course.model';
import { Student } from 'src/app/Models/Student.model';
import { CourseService } from 'src/app/Services/Facade_Services/course.service';
import { StudentService } from 'src/app/Services/Facade_Services/student-service.service';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { CourseModalComponent } from '../course-modal/course-modal.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses : Course[] ; 
  isLoading : boolean ; 
  //students : Student[] ;

  constructor(private courseService : CourseService, private studentService : StudentService , private ngbModal: NgbModal) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses)=> this.courses = courses);
    this.courseService.getLoading().subscribe((isLoading)=>this.isLoading = isLoading);
  }

  OpenDetailModal(course : Course ){
    const modalRef =  this.ngbModal.open(CourseDetailComponent,{backdrop: 'static'});
    //pass input to the component
    modalRef.componentInstance.course = course ;
    modalRef.result.then((result) => {
      switch(result['type']) {
        case 'ADD' : {
          this.courseService.addStudentToCourse(result['course'] , result['student']);
          break; 
        }
        case 'DELETE' : {
          this.courseService.removeStudentFromCourse(result['course'] , result['student']);
          break; 
        } ;
      }
    })
  }

  //opens the course modal to create one and send the course to the service 
  openAddCourseModal() {
    const modalRef = this.ngbModal.open(CourseModalComponent, {backdrop : 'static'}); 
    modalRef.componentInstance.title = "Create a new course" ;
    modalRef.result.then((course)=> {
      this.courseService.addCourse(course).subscribe((course)=> {
        // Do something, a toast maybe
      });
    });
  }

  //opens the course modal to create one and send the course to the service 
  openEditCourseModal(course : Course) {
    const modalRef = this.ngbModal.open(CourseModalComponent, {backdrop : 'static'}); 
    modalRef.componentInstance.title = "Edit" + course.name ;
    modalRef.componentInstance.inputCourse =course ;
    modalRef.result.then((course)=> {
      this.courseService.updateCourse(course).subscribe((course)=> {
        // Do something, a toast maybe
      });
    });
  }


  //opens the course modal to create one and send the course to the service 
  openConfirmDeleteModal(course : Course) {
    const modalRef = this.ngbModal.open(ConfirmationModalComponent, {backdrop : 'static'}); 
    modalRef.componentInstance.title = "Confirm Delete" ;
    modalRef.componentInstance.message = "Are you sure you want to delete "+ course.name + " ?"  ;
    modalRef.result.then((isConfirmed)=> {
      if(isConfirmed) this.courseService.deleteCourse(course).subscribe(()=> {
        // Do something, a toast maybe
      });
    });
  }


}
