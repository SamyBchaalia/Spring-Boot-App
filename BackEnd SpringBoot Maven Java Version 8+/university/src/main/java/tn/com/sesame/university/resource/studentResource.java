package tn.com.sesame.university.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.com.sesame.university.model.Student;
import tn.com.sesame.university.service.studentService;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/student")
public class studentResource {
    private final studentService studentService;

    public studentResource(tn.com.sesame.university.service.studentService studentService) {
        this.studentService = studentService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Student>> getAllStudents(){
        List<Student> students=studentService.findAllStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable("id") Long id){
        Student student=studentService.findStudentById(id);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Student> addStudent(@RequestBody Student s){
        Student student= studentService.addStudent(s);
        return new ResponseEntity<>(student,HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<Student> updateEmployee(@RequestBody Student student) {
        Student updateEmployee = studentService.updateStudent(student);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
        studentService.deleteStudent(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
