import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './Components/Courses-Components/course-list/course-list.component';
import { StudentListComponent } from './Components/Student-Components/student-list/student-list.component';

const routes: Routes = [
  { path: '', component: CourseListComponent, pathMatch : 'full' },
  { path: 'students', component: StudentListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
