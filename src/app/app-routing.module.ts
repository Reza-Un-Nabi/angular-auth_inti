import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CalenderComponent} from './calender/calender.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'dashboard',component:DashboardComponent},
  { path:'calender',component:CalenderComponent }
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
