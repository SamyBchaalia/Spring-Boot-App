import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(    
    private http: HttpClient,
    private router: Router,
    public service:ServiceService,public dialogRef:MatDialogRef<GroupComponent>
  ) { }






userspecs:any = {name:this.service.Group.get('name').value,year:this.service.Group.get('year').value,mDomain:this.service.Group.get('mDomain').value};

selectedimg: any = null;

ngOnInit(): void {




}
edit(product:any)
{
console.log(product);
}

currentJustify = 'start';



onClear() {
this.service.Group.reset();
this.service.initializeGroup();

}
onSubmit(){
document.getElementById('loader').style.display = "block";
this.submit();

}
submit(){



this.service.UpdateGroupe(this.service.Group.value);
this.service.Group.reset();
this.service.initializeGroup();
this.onClose();



}
onClose(){
this.service.Group.reset();
this.service.initializeGroup();
this.dialogRef.close();


}

}



