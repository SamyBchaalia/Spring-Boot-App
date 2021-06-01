package tn.com.sesame.university.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.com.sesame.university.model.Student;

import java.util.Optional;

public interface studentRepo extends JpaRepository<Student, Long> {
    void deleteStudentById(Long id);

    Optional<Student> findStudentById(Long id);
}
