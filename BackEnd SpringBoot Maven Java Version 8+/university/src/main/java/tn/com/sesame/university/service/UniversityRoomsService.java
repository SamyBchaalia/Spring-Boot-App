
        package tn.com.sesame.university.service;

import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tn.com.sesame.university.exception.UserNotFoundException;
import tn.com.sesame.university.model.UniversityRooms;
import tn.com.sesame.university.repo.UniversityRoomsRepo;

import java.util.List;
@Transactional
@Service
public class UniversityRoomsService {
    private final UniversityRoomsRepo UniversityRoomsRepo;
    @Autowired
    public UniversityRoomsService(tn.com.sesame.university.repo.UniversityRoomsRepo UniversityRoomsRepo) {
        this.UniversityRoomsRepo = UniversityRoomsRepo;
    }
    public UniversityRooms addUniversityRooms(UniversityRooms UniversityRooms){
        return  UniversityRoomsRepo.save(UniversityRooms);
    }
    public List<UniversityRooms>  findAllUniversityRoomss(){
        return  UniversityRoomsRepo.findAll();
    }
    public UniversityRooms updateUniversityRooms(UniversityRooms UniversityRooms){
        return UniversityRoomsRepo.save(UniversityRooms);
    }
    public  UniversityRooms findUniversityRoomsById(Long id){
        return UniversityRoomsRepo.findUniversityRoomsById(id).orElseThrow(()-> new UserNotFoundException("User By id"+id+"wasn't found"));
    }
    public void deleteUniversityRooms(Long id){
        UniversityRoomsRepo.deleteUniversityRoomsById(id);
    }
}
