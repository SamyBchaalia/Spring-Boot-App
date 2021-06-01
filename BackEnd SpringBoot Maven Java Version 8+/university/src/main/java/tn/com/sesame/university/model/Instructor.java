package tn.com.sesame.university.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Instructor implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String fullName;
    private String email;
    private String phone;
    private String imageUrl;


    public Instructor(){}
    public Instructor(String fullName, String email, String phone, String imageUrl) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.imageUrl = imageUrl;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    @Override
    public  String toString(){
        return "Instructor{"+"id"+id+", name"+fullName +'\'' + email  +'\'' +phone +"}";
    }
}
