package tn.com.sesame.university.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity

public class UniversityRooms implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;
    private int roomNumber;

    public UniversityRooms(int roomNumber) {
        this.roomNumber = roomNumber;
    }
    public UniversityRooms() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
