import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GroupComponent } from '../child/group/group.component';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {

  ListData : MatTableDataSource <any>;
  DisplayedColumns:string[]=['Name','Year','Field','Actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  searchKey: string;
  
    constructor(private service:ServiceService,private http:HttpClient,private dialog:MatDialog) { }
  list:any;
    ngOnInit(): void {
      this.service.getGroups().subscribe((data)=>{
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
    this.service.initializeGroup();
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus=true;
    dialogconfig.width="40%";
    dialogconfig.height="70%";
  const dialogref=this.dialog.open(GroupComponent,dialogconfig);
  dialogref.afterClosed().subscribe((result)=>{
    console.log("this one works")
    this.ngOnInit();
  });
  }
  onEdit(row){
  this.service.completeGroup(row);
  const dialogconfig = new MatDialogConfig();
  dialogconfig.autoFocus=true;
  dialogconfig.width="40%";
  dialogconfig.height="70%";
  const dialogref=this.dialog.open(GroupComponent,dialogconfig);
  dialogref.afterClosed().subscribe((result)=>{
    console.log("this one works")
    this.ngOnInit();
  });
  
  }
  onDelete(row){
    this.service.DeleteGroup(row.id).subscribe((data)=>{
      this.ngOnInit();
    });
  }
  
  }

