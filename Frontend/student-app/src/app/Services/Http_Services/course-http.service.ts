import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/Models/Course.model';
import { Student } from 'src/app/Models/Student.model';

@Injectable({
  providedIn: 'root'
})
export class CourseHttpService {

  hostName : string = "http://localhost:8080/"
  constructor(private http: HttpClient) { }

  getCourses() : Observable<Course[]>  {
    return this.http.get<Course[]>(this.hostName+"courses");
  }

  addCourse(course : Course) : Observable<Course>  {
    return this.http.post<Course>(this.hostName+"courses",course);
  }

  updateCourse(course : Course) : Observable<Course>  {
    return this.http.put<Course>(this.hostName+"courses/"+course.id,course);
  }

  removeCourse(course : Course) : Observable<Course>  {
    return this.http.delete<Course>(this.hostName+"courses/"+course.id);
  }

  addStudentToCourse(course : Course, student : Student) : Observable<Course> {
    return this.http.post<Course>(this.hostName+"courses/" + course.id  + "/addStudent" + student.id , []);
  }
  removeStudentFromCourse(course : Course, student : Student) : Observable<Course> {
    return this.http.post<Course>(this.hostName+"courses/" + course.id  + "/removeStudent" + student.id , []);
  }
}
