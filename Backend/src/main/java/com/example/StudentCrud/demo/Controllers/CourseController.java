package com.example.StudentCrud.demo.Controllers;

import com.example.StudentCrud.demo.Models.Course;
import com.example.StudentCrud.demo.Models.Student;
import com.example.StudentCrud.demo.Repositories.CourseRepository;
import com.example.StudentCrud.demo.Services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseController {

    @Autowired
    CourseService service ;

    @GetMapping("/courses")
    public List<Course> getCourses() {
        return service.getCourses();
    }
    @GetMapping("/courses/name/{name}")
    public List<Course> getAllCoursesByName(@PathVariable("name") String courseName){
        return service.getAllCoursesByName(courseName);
    }
    @GetMapping("/courses/{id}")
    public Course getCourseById(@PathVariable("id") long id ) {
        return service.getCourseById(id);
    }

    @PostMapping("/courses")
    public Course addCourse( @RequestBody Course course) {
        return service.addCourse(course);
    }

    @PutMapping("/courses/{id}")
    public Course updateCourse(@PathVariable("id") long id,@RequestBody Course course){
        return service.updateCourse(id,course);
    }
    @DeleteMapping("/courses/{id}")
    public void deleteCourseById(@PathVariable("id") long id) {
        service.deleteCourseById(id);
    }

    @PostMapping("/courses/{id}/addStudent/{sId}")
    public ResponseEntity<Course> addStudentToCourse(@PathVariable("id") long cId, @PathVariable("sId") long sId ){
        return service.addStudentToCourse(cId,sId) ;
    }
    @PostMapping("/courses/{id}/removeStudent/{sId}")
    public ResponseEntity<Course> removeStudentFromCourse(@PathVariable("id") long cId, @PathVariable("sId") long sId ){
        return service.removeStudentFromCourse(cId,sId) ;
    }


}
