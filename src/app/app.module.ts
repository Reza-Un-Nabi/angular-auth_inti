import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule }    from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule,MatInputModule ,MatListModule, MatButtonModule,MatMenuModule,MatTabsModule } from  '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
import { StudentTrackerStudentsComponent } from './student/student-tracker-students/student-tracker-students.component';
import { StudentTrackerFollowupComponent } from './student/student-tracker-followup/student-tracker-followup.component';
import { StudentTrackerDropplanComponent } from './student/student-tracker-dropplan/student-tracker-dropplan.component';
import { LeadsComponent } from './leads/leads/leads.component';
import { AddleadComponent } from './leads/addlead/addlead.component';
import { LeadViewComponent } from './leads/lead-view/lead-view.component';
import { LeadViewLeadsComponent } from './leads/lead-view-leads/lead-view-leads.component';
import { LeadViewTrackerComponent } from './leads/lead-view-tracker/lead-view-tracker.component';

const matModules = [
  MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule

];

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
    PassportComponent,
    StudentTrackerStudentsComponent,
    StudentTrackerFollowupComponent,
    StudentTrackerDropplanComponent,
    AddleadComponent,
    LeadsComponent,
    LeadViewComponent,
    LeadViewLeadsComponent,
    LeadViewTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    matModules

  ],
  exports:[
    matModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
