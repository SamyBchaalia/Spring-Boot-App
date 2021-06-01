package tn.com.sesame.university.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.com.sesame.university.model.Groupes;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/group")
public class GroupeResource {
    private final tn.com.sesame.university.service.groupService groupService;

    public GroupeResource(tn.com.sesame.university.service.groupService Service) {
        this.groupService = Service;
    }


    @GetMapping("/all")
    public ResponseEntity<List<Groupes>> getAllGroups(){
        List<Groupes> groupes =groupService.findAllGroups();
        return new ResponseEntity<>(groupes, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Groupes> getGroupById(@PathVariable("id") Long id){
        Groupes groupes =groupService.findGroupById(id);
        return new ResponseEntity<>(groupes, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Groupes> addGroup(@RequestBody Groupes s){
        Groupes groupes = groupService.addGroup(s);
        return new ResponseEntity<>(groupes,HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<Groupes> updateGroup(@RequestBody Groupes groupes) {
        Groupes updateGroupes = groupService.updateGroup(groupes);
        return new ResponseEntity<>(updateGroupes, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteGroup(@PathVariable("id") Long id) {
        groupService.deleteGroup(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

