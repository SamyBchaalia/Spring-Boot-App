package tn.com.sesame.university.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.com.sesame.university.model.Instructor;

import java.util.Optional;

public interface instructorRepo extends JpaRepository<Instructor,Long> {

    Optional<Instructor> findInstructorById(Long id);

    void deleteInstructorById(Long id);
}
