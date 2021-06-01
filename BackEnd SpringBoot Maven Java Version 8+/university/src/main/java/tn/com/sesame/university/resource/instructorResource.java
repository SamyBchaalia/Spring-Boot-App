package tn.com.sesame.university.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.com.sesame.university.model.Instructor;
import tn.com.sesame.university.service.instructorService;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/instructor")
public class instructorResource {
    private final instructorService instructorService;

    public instructorResource(instructorService Service) {
        this.instructorService = Service;
    }


    @GetMapping("/all")
    public ResponseEntity<List<Instructor>> getAllInstructors(){
        List<Instructor> instructors=instructorService.findAllInstructors();
        return new ResponseEntity<>(instructors, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Instructor> getInstructorById(@PathVariable("id") Long id){
        Instructor instructor=instructorService.findInstructorById(id);
        return new ResponseEntity<>(instructor, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Instructor> addInstructor(@RequestBody Instructor s){
        Instructor instructor= instructorService.addInstructor(s);
        return new ResponseEntity<>(instructor,HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<Instructor> updateEmployee(@RequestBody Instructor instructor) {
        Instructor updateInstructor = instructorService.updateInstructor(instructor);
        return new ResponseEntity<>(updateInstructor, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
        instructorService.deleteInstructor(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
