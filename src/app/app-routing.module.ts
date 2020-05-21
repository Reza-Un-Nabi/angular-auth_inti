import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CalenderComponent} from './calender/calender.component';

/* Student */
import {StudentComponent} from './student/student/student.component'
import {AddStudentComponent} from './student/add-student/add-student.component';
import {ViewStudentComponent} from './student/view-student/view-student.component';
import {StudentTrackerComponent} from './student/student-tracker/student-tracker.component';
import {StudentDashboardComponent} from './student/student-dashboard/student-dashboard.component';
import {AcademicComponent} from './student/academic/academic.component';
import {LanguageComponent} from './student/language/language.component';
import {PassportComponent} from './student/passport/passport.component';
import {StudentTrackerStudentsComponent} from './student/student-tracker-students/student-tracker-students.component';
import {StudentTrackerFollowupComponent} from './student/student-tracker-followup/student-tracker-followup.component';
import {StudentTrackerDropplanComponent} from './student/student-tracker-dropplan/student-tracker-dropplan.component';

/* Leads  */
import { AddleadComponent } from './leads/addlead/addlead.component';
import { LeadViewComponent } from './leads/lead-view/lead-view.component';
import { LeadViewLeadsComponent } from './leads/lead-view-leads/lead-view-leads.component';
import { LeadViewTrackerComponent } from './leads/lead-view-tracker/lead-view-tracker.component';
import{LeadViewImportComponent} from './leads/lead-view-import/lead-view-import.component';

/* Application Manager */
import {AddApplicationComponent} from './application-manager/add-application/add-application.component';
import {ApplicationViewComponent} from './application-manager/application-view/application-view.component';
import {ApplicationClientComponent} from './application-manager/application-client/application-client.component';
import {ApplicationDashboardComponent} from './application-manager/application-dashboard/application-dashboard.component';
import {ApplicationTrackerComponent} from './application-manager/application-tracker/application-tracker.component';

/* Accounts */
  /* Student Invoice */
import {StudentInvoiceComponent} from './accounts/studentInvoice/student-invoice/student-invoice.component';
import {AddInvoiceComponent} from './accounts/studentInvoice/add-invoice/add-invoice.component';
import {PendingInvoicesComponent} from './accounts/studentInvoice/pending-invoices/pending-invoices.component';
import {PaidInvoicesComponent} from './accounts/studentInvoice/paid-invoices/paid-invoices.component';
import {FeatureInvoicesComponent} from './accounts/studentInvoice/feature-invoices/feature-invoices.component';

  /* University Invoice */
import {UniversityInvoiceComponent} from './accounts/universityInvoice/university-invoice/university-invoice.component';
import {UnivaddInvoiceComponent} from './accounts/universityInvoice/univadd-invoice/univadd-invoice.component';
import {UnivpendingInvoiceComponent} from './accounts/universityInvoice/univpending-invoice/univpending-invoice.component';
import {UnivpaidInvoiceComponent} from './accounts/universityInvoice/univpaid-invoice/univpaid-invoice.component';
import {UnivFeatureInvoiceComponent} from './accounts/universityInvoice/univ-feature-invoice/univ-feature-invoice.component';

import {AgentInvoiceComponent} from './accounts/agentInvoice/agent-invoice/agent-invoice.component';
import {VisaInvoiceComponent} from './accounts/visaInvoice/visa-invoice/visa-invoice.component';

  /* Payment */
  import {AddPaymentComponent} from './accounts/payments/add-payment/add-payment.component';
import {PaymentComponent} from './accounts/payments/payment/payment.component';

/* Admin */

import {CountryComponent} from './admin/country/country.component';
import {CourseComponent} from './admin/course/course.component';
import {SourceComponent} from './admin/source/source.component';
import {CheckListComponent} from './admin/check-list/check-list.component';
import {BranchComponent} from './admin/branch/branch.component';
import {PermissionComponent} from './admin/permission/permission.component';
import {SmsTemplateComponent} from './admin/sms-template/sms-template.component';
import {EmailTemplateComponent} from './admin/email-template/email-template.component';


/* University */
import { AddUniversityComponent } from './university/add-university/add-university.component';
import { ViewUniversityComponent } from './university/view-university/view-university.component';
import { BulkUploadUniversityComponent } from './university/bulk-upload-university/bulk-upload-university.component';

/* Visa Manager */
import { AddVisaComponent } from './visa-manager/add-visa/add-visa.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'dashboard',component:DashboardComponent},
  { path:'calender',component:CalenderComponent },

 /*  student routing */
  { path:'student',component:StudentComponent,children:[
    { path:'addStudent',component:AddStudentComponent},
    { path:'academic',component:AcademicComponent},
    { path:'language',component:LanguageComponent},
    { path:'passport',component:PassportComponent},
    {path: '**', redirectTo: 'addStudent'}
  ]},
  { path:'viewStudent',component:ViewStudentComponent},
  { path:'studentTracher',component:StudentTrackerComponent,children:[
    {path:'trackStudents',component:StudentTrackerStudentsComponent},
    {path:'followupStudent',component:StudentTrackerFollowupComponent},
    {path:'dropplanStudent',component:StudentTrackerDropplanComponent},
    {path:'**',redirectTo:'trackStudents'}
  ]},
  { path:'studentDashboard',component:StudentDashboardComponent},
  /* { path:'dashboard',component:DashboardComponent,children: [

    { path:'calender',component:CalenderComponent },
    {path: '**', redirectTo: 'calender'}

  ]} */

  /* Leads */
   { path:'add-lead',component:AddleadComponent },
   { path:'leadview',component:LeadViewComponent,children:[
      {path:'viewLeads',component:LeadViewLeadsComponent},
      {path:'followupStudent',component:StudentTrackerFollowupComponent},
      {path:'dropplanStudent',component:StudentTrackerDropplanComponent},
      {path:'**',redirectTo:'viewLeads'}
    ]},
    { path:'lead-view-import',component:LeadViewImportComponent},

    /* Application Manager */
    {path:'addApplication',component:AddApplicationComponent},
    {path:'viewApplication',component:ApplicationViewComponent},
    {path:'trackerApplication',component:ApplicationTrackerComponent},
    {path:'dashboardApplication',component:ApplicationDashboardComponent},
    {path:'clientApplication',component:ApplicationClientComponent},

    /* Accounts */
        /* Student Invoices */
    {path:'addStudentInvoice',component:AddInvoiceComponent},
    {path:'studentInvoices', component:StudentInvoiceComponent,children:[
        {path:'studentPendingInvoice',component:PendingInvoicesComponent},
        {path:'studentPaidInvoice',component:PaidInvoicesComponent},
        {path:'studentFeatureInvoice',component:FeatureInvoicesComponent},
        {path:'**',redirectTo:'studentPendingInvoice'}
    ]},
      /* University Invoices */
    {path:'addUniversityInvoice',component:UnivaddInvoiceComponent},
    {path:'universityInvoices', component:UniversityInvoiceComponent,children:[
      {path:'universityPendingInvoice',component:UnivpendingInvoiceComponent},
      {path:'universityPaidInvoice',component:UnivpaidInvoiceComponent},
      {path:'universityFeatureInvoice',component:UnivFeatureInvoiceComponent},
      {path:'**',redirectTo:'universityPendingInvoice'}
    ]},

       /* Agent Invoices */
    {path:'agentnvoices', component:AgentInvoiceComponent},

       /* Visa Invoices */
    {path:'visaInvoices', component:VisaInvoiceComponent},

      /* Payment */
    {path:'addPayment', component:AddPaymentComponent},
    {path:'payment', component:PaymentComponent},

    /* Admin */

    {path:'addCountry', component:CountryComponent},
    {path:'addCourse', component:CourseComponent},
    {path:'addSource', component:SourceComponent},
    {path:'addPermission', component:PermissionComponent},
    {path:'addBranch', component:BranchComponent},
    {path:'addCheckList', component:CheckListComponent},
    {path:'addSmsTemplate', component:SmsTemplateComponent},
    {path:'addEmailTemplate', component:EmailTemplateComponent},

    /* University */
    {path:'addUniversity', component:AddUniversityComponent},
    {path:'viewUniversity', component:ViewUniversityComponent},
    {path:'bulkUploadUniversity', component:BulkUploadUniversityComponent},

      /* Visa Manager */
    {path:'addVisa', component:AddVisaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
