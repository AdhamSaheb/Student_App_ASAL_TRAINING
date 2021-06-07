import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { StudentListComponent } from './Components/Student-Components/student-list/student-list.component';
import { CourseListComponent } from './Components/Courses-Components/course-list/course-list.component';
import { MainComponentComponent } from './Components/main-component/main-component.component';
import { StudentDetailComponent } from './Components/Student-Components/student-detail/student-detail.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { studentReducer } from './Store/Reducers/student.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './Store/Effects/students.effects';
import {  StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CourseDetailComponent } from './Components/Courses-Components/course-detail/course-detail.component';
import { courseReducer } from './Store/Reducers/course.reducer';
import { CoursesEffects } from './Store/Effects/courses.effects';
import { CourseModalComponent } from './Components/Courses-Components/course-modal/course-modal.component';
import { ConfirmationModalComponent } from './Components/Courses-Components/confirmation-modal/confirmation-modal.component';
import { CommonModule } from '@angular/common';
import { StudentModalComponent } from './Components/Student-Components/student-modal/student-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    StudentListComponent,
    CourseListComponent,
    MainComponentComponent,
    StudentDetailComponent,
    CourseDetailComponent,
    CourseModalComponent,
    ConfirmationModalComponent,
    StudentModalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ students : studentReducer ,courses: courseReducer }),
    EffectsModule.forRoot([StudentEffects,CoursesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
