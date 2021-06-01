package tn.com.sesame.university.model;

import javax.persistence.*;
import java.io.Serializable;
@Entity

public class Groupes implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String name;
    private String year;
    @Column(nullable = true,updatable = true)
    private String mDomain;
    @Override
    public  String toString(){
        return "group:{"+"id"+id+", name"+name +'\'' + year  +'\'' + mDomain +"}";
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getmMDomian() {
        return mDomain;
    }

    public void setmMDomian(String mDomaine) {
        this.mDomain = mDomaine;
    }

    public Groupes(){}
    public Groupes(String name, String year, String mDomain) {
        this.name = name;
        this.year = year;
        this.mDomain = mDomain;
    }
}
