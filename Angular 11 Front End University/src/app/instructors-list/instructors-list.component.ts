import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InstructorComponent } from '../child/instructor/instructor.component';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-instructors-list',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.css']
})
export class InstructorsListComponent implements OnInit {

  ListData : MatTableDataSource <any>;
  DisplayedColumns:string[]=['Name','Email','phone','Actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  searchKey: string;
  
    constructor(private service:ServiceService,private http:HttpClient,private dialog:MatDialog) { }
  list:any;
    ngOnInit(): void {
      this.service.getInstractors().subscribe((data)=>{
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
    this.service.initializeInstractorGroup();
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus=true;
    dialogconfig.width="40%";
    dialogconfig.height="70%";
  const dialogref=this.dialog.open(InstructorComponent,dialogconfig);
  dialogref.afterClosed().subscribe((result)=>{
    console.log("this one works")
    this.ngOnInit();
  });
  }
  onEdit(row){
  this.service.completei(row);
  const dialogconfig = new MatDialogConfig();
  dialogconfig.autoFocus=true;
  dialogconfig.width="40%";
  dialogconfig.height="70%";
  const dialogref=this.dialog.open(InstructorComponent,dialogconfig);
  dialogref.afterClosed().subscribe((result)=>{
    console.log("this one works")
    this.ngOnInit();
  });
  
  }
  onDelete(row){
    this.service.DeleteInstractor(row.id).subscribe((data)=>{
      this.ngOnInit();
    });
  }
  
  }
