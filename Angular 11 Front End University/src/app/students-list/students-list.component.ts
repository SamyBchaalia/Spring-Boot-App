import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentComponent } from '../child/student/student.component';
import { ServiceService } from '../shared/service.service';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  ListData : MatTableDataSource <any>;
  DisplayedColumns:string[]=['Name','Email','phone','group','Actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  searchKey: string;
  
    constructor(private service:ServiceService,private http:HttpClient,private dialog:MatDialog) { }
  list:any;
    ngOnInit(): void {
      this.service.getStudents().subscribe((data)=>{
        this.list=data;
        console.log(this.list);
        this.ListData = new MatTableDataSource(this.list);
        this.ListData.sort=this.sort;
        this.ListData.paginator=this.paginator;
        
      });
  
  
      
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.ListData.filter = this.searchKey.trim().toLowerCase();
  }
  
  onCreate(){
    this.service.initializeFormGroup();
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus=true;
    dialogconfig.width="68%";
    dialogconfig.height="90%";
  const dialogref=this.dialog.open(StudentComponent,dialogconfig);
  dialogref.afterClosed().subscribe((result)=>{
    console.log("this one works")
    this.ngOnInit();
  });
  }
  onEdit(row){
  this.service.complete(row);
  const dialogconfig = new MatDialogConfig();
  dialogconfig.autoFocus=true;
  dialogconfig.width="70%";
  dialogconfig.height="90%";
  const dialogref=this.dialog.open(StudentComponent,dialogconfig);
  dialogref.afterClosed().subscribe((result)=>{
    console.log("this one works")
    this.ngOnInit();
  });
  
  }
  onDelete(row){
    this.service.DeleteStudent(row.id).subscribe((data)=>{
      this.ngOnInit();
    });
  }
  
  }