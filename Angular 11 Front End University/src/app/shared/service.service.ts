import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { FormGroup,FormControl,Validators  } from '@angular/forms';
import { group } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) {}
  studentList:any;
  student:FormGroup=new FormGroup({
    id:new FormControl(null),
    fullName : new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone : new FormControl(10),
    group: new FormControl(null),
    imageUrl : new FormControl('../../assets/Insert Image.svg')
  });
    initializeFormGroup(){
      this.student.setValue({
        id:null,
        fullName : '',
        email:'',
        phone : null,
        group:'',
        imageUrl :'../../assets/Insert Image.svg',
      });
    
}
getStudents(){
  console.log("function 1")
  return this.http.get(`http://localhost:8080/student/all`);}
Insertstudent(student){
let studentInstert={ 
  fullName:student.fullName,
  email:student.email,
  phone:student.phone,
  group:student.group,
  imageUrl:student.imageUrl}
this.http.post(`http://localhost:8080/student/add`,studentInstert,{responseType: "text",}).subscribe((data)=>{
  console.log(data);
})
}
UpdateStudent(student){
  let studentInstert={ 
    id:student.id,
    fullName:student.fullName,
    email:student.email,
    phone:student.phone,
    group:student.group,
    imageUrl:student.imageUrl}
this.http.put(`http://localhost:8080/student/update`,studentInstert,{responseType:"text"}).subscribe((data)=>{
  console.log(data);
})
}
DeleteStudent(id){
console.log(id);
return this.http.delete(`http://localhost:8080/student/delete/${id}`,{responseType:"text"});
}

complete(student){
this.student.setValue({
  id:student.id,
  fullName:student.fullName,
  email:student.email,
  phone:student.phone,
  group:student.group,
  imageUrl:student.imageUrl
});

}
// Instractor
InstractorList:any;
  instractor:FormGroup=new FormGroup({
    id:new FormControl(null),
    fullName : new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone : new FormControl(10),
    imageUrl : new FormControl('../../assets/Insert Image.svg')
  });
    initializeInstractorGroup(){
      this.instractor.setValue({
        id:null,
        fullName : '',
        email:'',
        phone : null,
        imageUrl :'../../assets/Insert Image.svg',
      });
    
}
getInstractors(){
  return this.http.get(`http://localhost:8080/instructor/all`);}
InsertInstractor(instructor){
let instructorInstert={ 
  fullName:instructor.fullName,
  email:instructor.email,
  phone:instructor.phone,
  imageUrl:instructor.imageUrl}
this.http.post(`http://localhost:8080/instructor/add`,instructorInstert,{responseType: "text",}).subscribe((data)=>{
  console.log(data);
})
}
UpdateInstractor(instructor){
  let instructorInstert={ 
    id:instructor.id,
    fullName:instructor.fullName,
    email:instructor.email,
    phone:instructor.phone,
    imageUrl:instructor.imageUrl}
this.http.put(`http://localhost:8080/instructor/update`,instructorInstert,{responseType:"text"}).subscribe((data)=>{
  console.log(data);
})
}
DeleteInstractor(id){
console.log(id);
return this.http.delete(`http://localhost:8080/instructor/delete/${id}`,{responseType:"text"});
}

completei(instractor){
this.instractor.setValue({
  id:instractor.id,
  fullName:instractor.fullName,
  email:instractor.email,
  phone:instractor.phone,
  imageUrl:instractor.imageUrl
});}
//////////////////////////////////////Groupe//////////////
GroupList:any;
  Group:FormGroup=new FormGroup({
    id:new FormControl(null),
    name : new FormControl('',Validators.required),
    year: new FormControl('',Validators.required),
    mDomain : new FormControl(10),
  });
    initializeGroup(){
      this.Group.setValue({
        id:null,
        name : '',
        year:'',
        mDomain : '',
      });
    
}
getGroups(){
  return this.http.get(`http://localhost:8080/group/all`);}
InsertGroup(Group){
let groupInstert={ 
  name:Group.name,
  email:Group.year,
  phone:Group.mDomain,
  }
this.http.post(`http://localhost:8080/group/add`,groupInstert,{responseType: "text",}).subscribe((data)=>{
  console.log(data);
})
}
UpdateGroupe(Group){
  let groupInstert={ 
    id:Group.id,
    name:Group.name,
    email:Group.year,
    phone:Group.mDomain,
    }
this.http.put(`http://localhost:8080/group/update`,groupInstert,{responseType:"text"}).subscribe((data)=>{
  console.log(data);
})
}
DeleteGroup(id){
console.log(id);
return this.http.delete(`http://localhost:8080/group/delete/${id}`,{responseType:"text"});
}

completeGroup(Group){
this.Group.setValue({
    id:Group.id,
    name:Group.name,
    email:Group.year,
    phone:Group.mDomain
});}



}