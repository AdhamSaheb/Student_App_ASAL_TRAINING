package com.example.StudentCrud.demo.Controllers;

import com.example.StudentCrud.demo.Models.Student;
import com.example.StudentCrud.demo.Services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class StudentController{
    @Autowired
    StudentService service ;

    @GetMapping("/students")
    public List<Student> findAll() {
        return service.findAll();
    }

    @GetMapping("/students/firstName/{firstName}")
    public List<Student> findStudentByFirstName( @PathVariable(value = "firstName")  String firstName) {
        return service.findAllByFirstName(firstName);
    }

    @GetMapping("/students/{id}")
    public Student findStudentById( @PathVariable(value="id") long id) {
        return service.findStudentById(id);
    }

    @PostMapping("students")
    public Student addStudent(@RequestBody Student student){
        return service.addStudent(student);
    }

    @DeleteMapping("students/{id}")
    public void deleteStudent(@PathVariable (value="id") long id ){
        service.deleteStudentById(id);
    }

    @PutMapping("students/{id}")
    public Student updateStudent(@PathVariable (value="id") long id,@RequestBody Student student){
        return service.updateStudent(id,student);
    }

}
