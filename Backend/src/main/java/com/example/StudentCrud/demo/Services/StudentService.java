package com.example.StudentCrud.demo.Services;


import com.example.StudentCrud.demo.Models.Student;
import com.example.StudentCrud.demo.Repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentRepository repository ;

    public List<Student> findAll() {
        return repository.findAll();
    }

    public List<Student> findAllByFirstName(String firstName) {
        return repository.findAllByFirstName(firstName);
    }

    public Student findStudentById( long id) {
        return repository.findById(id).get();
    }

    public Student addStudent( Student student){
        return repository.save(student);
    }

    public void deleteStudentById(long id){
        repository.deleteById(id);
    }

    public Student updateStudent(long id, Student student){
        return repository.findById(id)
                .map(newStudent -> {
                    newStudent.setFirstName(student.getFirstName());
                    return repository.save(newStudent);
                })
                .orElseGet(() -> {
                    student.setId(id);
                    return repository.save(student);
                });
    }



}
