package com.example.StudentCrud.demo.Services;

import com.example.StudentCrud.demo.Models.Course;
import com.example.StudentCrud.demo.Models.Student;
import com.example.StudentCrud.demo.Repositories.CourseRepository;
import com.example.StudentCrud.demo.Repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    CourseRepository repository ;
    @Autowired
    StudentRepository studentRepository ;

    public List<Course> getCourses() {
        return repository.findAll();
    }

    public List<Course> getAllCoursesByName(String courseName){
        return repository.findAllByName(courseName);
    }

    public Course getCourseById(long id ) {
        return repository.findById(id).get();
    }

    public Course addCourse(Course course) {
        return repository.save(course);
    }

    public Course updateCourse(long id,Course course){
        return repository.findById(id)
                .map(newCourse -> {
                    newCourse.setName(course.getName());
                    newCourse.setMaximumParticipants(course.getMaximumParticipants());
                    newCourse.setEnrolledStudents(course.getEnrolledStudents());
                    return repository.save(newCourse);
                })
                .orElseGet(() -> {
                    course.setId(id);
                    return repository.save(course);
                });
    }

    public void deleteCourseById(long id) {
        repository.deleteById(id);
    }

    public ResponseEntity<Course> addStudentToCourse(long cId, long sId ){
        Optional<Course> course = repository.findById(cId) ;
        Optional<Student>  student =studentRepository.findById(sId);
        if(!course.isPresent() || !student.isPresent() ) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST) ;
        }
        /* insert at 2 sides */
        if(! course.get().getEnrolledStudents().contains(student.get())) course.get().getEnrolledStudents().add(student.get()) ;
        if(! student.get().getRegisteredCourses().contains(course.get()))student.get().getRegisteredCourses().add(course.get()) ;
        studentRepository.save(student.get()) ;
        //System.out.println("Im here - > " + course.get().toString());
        return new ResponseEntity<Course>( repository.save(course.get()) , HttpStatus.OK) ;
    }

    public ResponseEntity<Course> removeStudentFromCourse(long cId, long sId ){
        Optional<Course> course = repository.findById(cId) ;
        Optional<Student>  student =studentRepository.findById(sId);
        if(!course.isPresent() || !student.isPresent() ) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST) ;
        }
        /* remove at 2 sides */
        course.get().getEnrolledStudents().remove(student.get()) ;
        student.get().getRegisteredCourses().remove(course.get());
        studentRepository.save(student.get());
        return new ResponseEntity<Course>(repository.save(course.get()), HttpStatus.OK) ;
    }
}
