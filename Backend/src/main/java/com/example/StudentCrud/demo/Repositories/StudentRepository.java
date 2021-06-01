package com.example.StudentCrud.demo.Repositories;

import com.example.StudentCrud.demo.Models.Student;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends BaseRepository<Student,Long>{
    public List<Student> findAllByFirstName(String firstName) ;
}
