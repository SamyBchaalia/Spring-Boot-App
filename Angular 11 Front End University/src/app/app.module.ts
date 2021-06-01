import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { InstructorsListComponent } from './instructors-list/instructors-list.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './child/student/student.component';
import { InstructorComponent } from './child/instructor/instructor.component';
import { RoomComponent } from './child/room/room.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { GroupComponent } from './child/group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsListComponent,
    InstructorsListComponent,
    RoomsListComponent,
    SessionsListComponent,
    StudentComponent,
    InstructorComponent,
    RoomComponent,
    GrouplistComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,
    BrowserAnimationsModule,MaterialModule,ReactiveFormsModule,FormsModule,NgbModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
