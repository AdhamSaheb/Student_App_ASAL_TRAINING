package com.example.StudentCrud.demo.Repositories;
import com.example.StudentCrud.demo.Models.Course;

import java.util.List;


public interface CourseRepository extends BaseRepository<Course,Long> {
    public List<Course> findAllByName(String courseName) ;
}
