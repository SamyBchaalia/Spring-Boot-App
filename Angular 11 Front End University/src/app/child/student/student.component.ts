import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(    
    private http: HttpClient,
    private router: Router,
    public service:ServiceService,public dialogRef:MatDialogRef<StudentComponent>
  ) { }

groups;




userspecs:any = {fullname:this.service.student.get('fullName').value,email:this.service.student.get('email').value,phone:this.service.student.get('phone').value,imageUrl:this.service.student.get('imageUrl').value,group:this.service.student.get('group').value};

selectedimg: any = null;

ngOnInit(): void {

this.service.getGroups().subscribe((data)=>{
  this.groups=data;
  console.log(data);
})


}
edit(product:any)
{
console.log(product);
}

currentJustify = 'start';


AddImage(event: any) {
if (event.target.files && event.target.files[0]) {
const reader = new FileReader();
reader.onload = (e: any) => (this.userspecs.image = e.target.result);
reader.readAsDataURL(event.target.files[0]);
this.selectedimg = event.target.files[0];
document.getElementById('editButton').style.display='block';

} else {
this.selectedimg = null;

}
}
onClear() {
this.service.student.reset();
this.service.initializeFormGroup();

}
onSubmit(){
document.getElementById('loader').style.display = "block";

// if(this.selectedimg!==null){
// let a= new Date();
// let datenow = a.getFullYear() + "|" + a.getMonth() +"|"+ a.getDay() +" At " + a.getHours() +"h :"+ a.getMinutes()+"m :" + a.getSeconds()+"s";

// var pathimg = "/TodayDishs/" + datenow + this.userspecs.name ;

// const imgref = this.storage.ref(pathimg);
// this.storage
// .upload(pathimg, this.selectedimg)
// .snapshotChanges()
// .pipe(
// finalize(() => {
// imgref.getDownloadURL().subscribe((url) => {            
// this.service.form.patchValue({image:url});
// this.submit();

// });
// })
// )
// .subscribe();
// }
// else if(this.selectedimg===null){
this.submit();

}
submit(){



this.service.UpdateStudent(this.service.student.value);
this.service.student.reset();
this.service.initializeFormGroup();
this.onClose();



}
onClose(){
this.service.student.reset();
this.service.initializeFormGroup();
this.dialogRef.close();


}

}


