import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

/* Super Admin */
import {OrganizationComponent} from './super_admin/organization/organization.component';
import {UserComponent} from './super_admin/user/user.component';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  { path:'dashboard',component:DashboardComponent},

    /* Super Admin */

    {path:'organization',component:OrganizationComponent},
    {path:'organizationuser',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
