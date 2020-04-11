import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CalenderComponent} from './calender/calender.component';
import {VisaManagerComponent} from './visa-manager/visa-manager.component';
import {StudentComponent} from './student/student/student.component'
import {AddStudentComponent} from './student/add-student/add-student.component';
import {ViewStudentComponent} from './student/view-student/view-student.component';
import {StudentTrackerComponent} from './student/student-tracker/student-tracker.component';
import {StudentDashboardComponent} from './student/student-dashboard/student-dashboard.component';
import {AcademicComponent} from './student/academic/academic.component';
import {LanguageComponent} from './student/language/language.component';
import {PassportComponent} from './student/passport/passport.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'dashboard',component:DashboardComponent},
  { path:'calender',component:CalenderComponent },
  { path:'visa-manager',component:VisaManagerComponent },
 /*  student routing */
  { path:'student',component:StudentComponent,children:[  
    { path:'addStudent',component:AddStudentComponent},
    { path:'academic',component:AcademicComponent},
    { path:'language',component:LanguageComponent},
    { path:'passport',component:PassportComponent},
    {path: '**', redirectTo: 'addStudent'} 
  ]},
  { path:'viewStudent',component:ViewStudentComponent},
  { path:'studentTracher',component:StudentTrackerComponent},
  { path:'studentDashboard',component:StudentDashboardComponent}
  /* { path:'dashboard',component:DashboardComponent,children: [

    { path:'calender',component:CalenderComponent },
    {path: '**', redirectTo: 'calender'}

  ]} */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
