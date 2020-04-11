import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule }    from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule,MatMenuModule,MatTabsModule } from  '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalenderComponent } from './calender/calender.component';
import { VisaManagerComponent } from './visa-manager/visa-manager.component';

import {StudentComponent} from './student/student/student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { StudentTrackerComponent } from './student/student-tracker/student-tracker.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { AcademicComponent } from './student/academic/academic.component';
import { LanguageComponent } from './student/language/language.component';
import { PassportComponent } from './student/passport/passport.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CalenderComponent,
    VisaManagerComponent,
    StudentComponent,
    AddStudentComponent,
    ViewStudentComponent,
    StudentTrackerComponent,
    StudentDashboardComponent,
    AcademicComponent,
    LanguageComponent,
    PassportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule
  ],
  exports:[
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
