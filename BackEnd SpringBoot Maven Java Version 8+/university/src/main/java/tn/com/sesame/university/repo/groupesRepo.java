package tn.com.sesame.university.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.com.sesame.university.model.Groupes;

import java.util.Optional;

public interface groupesRepo extends JpaRepository<Groupes,Long> {
    Optional<Groupes> findGroupesById(Long id);
    void deleteGroupesById(Long id);

}
