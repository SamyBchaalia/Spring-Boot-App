package tn.com.sesame.university.service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.stereotype.Service;
import tn.com.sesame.university.exception.UserNotFoundException;
import tn.com.sesame.university.model.Groupes;
import tn.com.sesame.university.repo.groupesRepo;

import java.util.List;
@Transactional
@Service
public class groupService {
    private final groupesRepo groupesRepo;

    public groupService(groupesRepo groupesRepo) {
        this.groupesRepo = groupesRepo;
    }
    public Groupes addGroup(Groupes groupes){
        return  groupesRepo.save(groupes);
    }
    public List<Groupes> findAllGroups(){
        return  groupesRepo.findAll();
    }
    public Groupes updateGroup(Groupes groupes){
        return groupesRepo.save(groupes);
    }
    public Groupes findGroupById(Long id){
        return groupesRepo.findGroupesById(id).orElseThrow(()-> new UserNotFoundException("User By id"+id+"wasn't found"));
    }
    public void deleteGroup(Long id){
        groupesRepo.deleteGroupesById(id);
    }
}
