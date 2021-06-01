package tn.com.sesame.university.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.com.sesame.university.exception.UserNotFoundException;
import tn.com.sesame.university.model.Instructor;
import tn.com.sesame.university.repo.instructorRepo;

import org.springframework.transaction.annotation.Transactional;
import java.util.List;
@Transactional
@Service
public class instructorService {
    private final tn.com.sesame.university.repo.instructorRepo instructorRepo;
    @Autowired


    public instructorService(tn.com.sesame.university.repo.instructorRepo instructorRepo) {
        this.instructorRepo = instructorRepo;
    }

    public Instructor addInstructor(Instructor instructor){
        return  instructorRepo.save(instructor);
    }
    public List<Instructor> findAllInstructors(){
        return  instructorRepo.findAll();
    }
    public Instructor updateInstructor(Instructor instructor){
        return instructorRepo.save(instructor);
    }
    public  Instructor findInstructorById(Long id){
        return instructorRepo.findInstructorById(id).orElseThrow(()-> new UserNotFoundException("User By id"+id+"wasn't found"));
    }
    public void deleteInstructor(Long id){
        instructorRepo.deleteInstructorById(id);
    }
}

