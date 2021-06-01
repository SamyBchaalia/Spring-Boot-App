package tn.com.sesame.university.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.com.sesame.university.model.UniversityRooms;
import tn.com.sesame.university.model.UniversityRooms;
import tn.com.sesame.university.service.UniversityRoomsService;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/universityRooms")
public class UniversityRoomsResource {
    private final UniversityRoomsService UniversityRoomsService;

    public UniversityRoomsResource(tn.com.sesame.university.service.UniversityRoomsService UniversityRoomsService) {
        this.UniversityRoomsService = UniversityRoomsService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<UniversityRooms>> getAllUniversityRoomss(){
        List<UniversityRooms> UniversityRoomss=UniversityRoomsService.findAllUniversityRoomss();
        return new ResponseEntity<>(UniversityRoomss, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<UniversityRooms> getUniversityRoomsById(@PathVariable("id") Long id){
        UniversityRooms UniversityRooms=UniversityRoomsService.findUniversityRoomsById(id);
        return new ResponseEntity<>(UniversityRooms, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<UniversityRooms> addUniversityRooms(@RequestBody UniversityRooms s){
        UniversityRooms UniversityRooms= UniversityRoomsService.addUniversityRooms(s);
        return new ResponseEntity<>(UniversityRooms,HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<UniversityRooms> updateEmployee(@RequestBody UniversityRooms UniversityRooms) {
        UniversityRooms updateEmployee = UniversityRoomsService.updateUniversityRooms(UniversityRooms);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
        UniversityRoomsService.deleteUniversityRooms(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
