package tn.com.sesame.university.service;

import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.com.sesame.university.exception.UserNotFoundException;
import tn.com.sesame.university.model.Student;
import tn.com.sesame.university.repo.studentRepo;

import java.util.List;
@Transactional
@Service
public class studentService {
    private final studentRepo studentRepo;
    @Autowired
    public studentService(tn.com.sesame.university.repo.studentRepo studentRepo) {
        this.studentRepo = studentRepo;
    }
    public Student addStudent(Student student){
        return  studentRepo.save(student);
    }
    public List<Student>  findAllStudents(){
        return  studentRepo.findAll();
    }
    public Student updateStudent(Student student){
        return studentRepo.save(student);
    }
    public  Student findStudentById(Long id){
        return studentRepo.findStudentById(id).orElseThrow(()-> new UserNotFoundException("User By id"+id+"wasn't found"));
    }
    public void deleteStudent(Long id){
        studentRepo.deleteStudentById(id);
    }
}
