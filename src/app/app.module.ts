import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule }    from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule, MatIconModule, MatSidenavModule,MatInputModule ,MatListModule, MatButtonModule,MatMenuModule,MatTabsModule } from  '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalenderComponent } from './calender/calender.component';
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
import { StudenPopupComponent } from './student/studen-popup/studen-popup.component';
import { LeadsComponent } from './leads/leads/leads.component';
import { AddleadComponent } from './leads/addlead/addlead.component';
import { LeadViewComponent } from './leads/lead-view/lead-view.component';
import { LeadViewLeadsComponent } from './leads/lead-view-leads/lead-view-leads.component';
import { LeadViewTrackerComponent } from './leads/lead-view-tracker/lead-view-tracker.component';
import { AddApplicationComponent } from './application-manager/add-application/add-application.component';
import { ApplicationViewComponent } from './application-manager/application-view/application-view.component';
import { ApplicationTrackerComponent } from './application-manager/application-tracker/application-tracker.component';
import { ApplicationDashboardComponent } from './application-manager/application-dashboard/application-dashboard.component';
import { ApplicationClientComponent } from './application-manager/application-client/application-client.component';
import { StudentInvoiceComponent } from './accounts/studentInvoice/student-invoice/student-invoice.component';
import { UniversityInvoiceComponent } from './accounts/universityInvoice/university-invoice/university-invoice.component';
import { AgentInvoiceComponent } from './accounts/agentInvoice/agent-invoice/agent-invoice.component';
import { VisaInvoiceComponent } from './accounts/visaInvoice/visa-invoice/visa-invoice.component';
import { PaymentComponent } from './accounts/payments/payment/payment.component';
import { CountryComponent } from './admin/country/country.component';
import { CourseComponent } from './admin/course/course.component';
import { SourceComponent } from './admin/source/source.component';
import { PermissionComponent } from './admin/permission/permission.component';
import { CheckListComponent } from './admin/check-list/check-list.component';
import { SmsTemplateComponent } from './admin/sms-template/sms-template.component';
import { EmailTemplateComponent } from './admin/email-template/email-template.component';
import { BranchComponent } from './admin/branch/branch.component';
import { AddInvoiceComponent } from './accounts/studentInvoice/add-invoice/add-invoice.component';
import { PendingInvoicesComponent } from './accounts/studentInvoice/pending-invoices/pending-invoices.component';
import { PaidInvoicesComponent } from './accounts/studentInvoice/paid-invoices/paid-invoices.component';
import { FeatureInvoicesComponent } from './accounts/studentInvoice/feature-invoices/feature-invoices.component';
import { AddPaymentComponent } from './accounts/payments/add-payment/add-payment.component';
import { UnivFeatureInvoiceComponent } from './accounts/universityInvoice/univ-feature-invoice/univ-feature-invoice.component';
import { UnivpendingInvoiceComponent } from './accounts/universityInvoice/univpending-invoice/univpending-invoice.component';
import { UnivpaidInvoiceComponent } from './accounts/universityInvoice/univpaid-invoice/univpaid-invoice.component';
import { UnivaddInvoiceComponent } from './accounts/universityInvoice/univadd-invoice/univadd-invoice.component';
import { LeadViewImportComponent } from './leads/lead-view-import/lead-view-import.component';
import { AddUniversityComponent } from './university/add-university/add-university.component';
import { ViewUniversityComponent } from './university/view-university/view-university.component';
import { BulkUploadUniversityComponent } from './university/bulk-upload-university/bulk-upload-university.component';
import { AddVisaComponent } from './visa-manager/add-visa/add-visa.component';
import { ViewVisaComponent } from './visa-manager/view-visa/view-visa.component';
import { OrganizationComponent } from './super_admin/organization/organization.component';
import { UserComponent } from './super_admin/user/user.component';
import { MessageComponent } from './message/message.component';



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
    MatCheckboxModule,
    MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CalenderComponent,
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
    StudenPopupComponent,
    AddleadComponent,
    LeadsComponent,
    LeadViewComponent,
    LeadViewLeadsComponent,
    LeadViewTrackerComponent,
    AddApplicationComponent,
    ApplicationViewComponent,
    ApplicationTrackerComponent,
    ApplicationDashboardComponent,
    ApplicationClientComponent,
    StudentInvoiceComponent,
    UniversityInvoiceComponent,
    AgentInvoiceComponent,
    VisaInvoiceComponent,
    PaymentComponent,
    CountryComponent,
    CourseComponent,
    SourceComponent,
    PermissionComponent,
    CheckListComponent,
    SmsTemplateComponent,
    EmailTemplateComponent,
    BranchComponent,
    AddInvoiceComponent,
    PendingInvoicesComponent,
    PaidInvoicesComponent,
    FeatureInvoicesComponent,
    AddPaymentComponent,
    UnivFeatureInvoiceComponent,
    UnivpendingInvoiceComponent,
    UnivpaidInvoiceComponent,
    UnivaddInvoiceComponent,

    LeadViewImportComponent,
    AddUniversityComponent,
    ViewUniversityComponent,
    BulkUploadUniversityComponent,
    AddVisaComponent,
    ViewVisaComponent,
    OrganizationComponent,
    UserComponent,
    MessageComponent
  ],

  entryComponents: [
    StudenPopupComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    matModules

  ],
  exports:[
    matModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
