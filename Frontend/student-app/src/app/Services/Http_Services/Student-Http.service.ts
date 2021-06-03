import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/Models/Student.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StudentHttpService {
    hostName : string = "http://localhost:8080/"
  constructor(private http: HttpClient) { }

  getStudents() : Observable<Student[]>  {
    return this.http.get<Student[]>(this.hostName+"students");
  }

  addStudent(student : Student) : Observable<Student>  {
    return this.http.post<Student>(this.hostName+"students",student);
  }

  updateStudent(student : Student) : Observable<Student>  {
    return this.http.put<Student>(this.hostName+"students/"+student.id,student);
  }

  removeStudent(student : Student) : Observable<Student>  {
    return this.http.delete<Student>(this.hostName+"students/"+student.id);
  }


}