import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './child/group/group.component';
import { StudentComponent } from './child/student/student.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { HomeComponent } from './home/home.component';
import { InstructorsListComponent } from './instructors-list/instructors-list.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { StudentsListComponent } from './students-list/students-list.component';


const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'students',
    component:StudentsListComponent
  },
  {
    path: 'instructors',
    component:InstructorsListComponent
  },
  {
    path: 'rooms',
    component:RoomsListComponent
  },
  {
    path: 'group',
    component:GrouplistComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }