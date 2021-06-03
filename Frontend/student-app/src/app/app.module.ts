import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { StudentListComponent } from './Components/Student-Components/student-list/student-list.component';
import { CourseListComponent } from './Components/Courses-Components/course-list/course-list.component';
import { MainComponentComponent } from './Components/main-component/main-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    StudentListComponent,
    CourseListComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
