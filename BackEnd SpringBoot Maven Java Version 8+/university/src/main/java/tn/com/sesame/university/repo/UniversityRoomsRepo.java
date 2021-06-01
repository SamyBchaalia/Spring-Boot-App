package tn.com.sesame.university.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.com.sesame.university.model.UniversityRooms;

import java.util.Optional;

public interface UniversityRoomsRepo extends JpaRepository<UniversityRooms, Long> {
    Optional<UniversityRooms> findUniversityRoomsById(Long id);
    void deleteUniversityRoomsById(Long id);

}
