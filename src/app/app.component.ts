import { Component,OnInit } from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service'
import { from } from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  iscollapsed: boolean = true;
  isLeadscollapsed: boolean = true;
  isApplicationCollapsed: boolean = true;
  isVisaManagerCollapsed: boolean = true;
  isAccountCollapsed: boolean = true;
  isAdminCollapsed: boolean = true;
  isUniversityCollapsed = true;
  isSuperAdminCollapsed: boolean = true;

  title = 'crs-front-end';

  private roles: string[];
  isLoggedIn = false;
  showAdminMenu = false;
  showStudentMenu = false;
  showVisaMenu = false;
  showApplicationMenu = false;
  showAccountMenu = false;
  showSuperAdminMenu = false;
  username: string;
  organizationName: string;

  toggleCollapsed() {
    this.iscollapsed = !this.iscollapsed;

    if (!this.iscollapsed) {

      this.isApplicationCollapsed = true;
      this.isLeadscollapsed = true;
      this.isVisaManagerCollapsed = true;
      this.isAccountCollapsed = true;
      this.isAdminCollapsed = true;
    }

  }
  toggleLeadsCollapsed() {
    this.isLeadscollapsed = !this.isLeadscollapsed;

    if (!this.isLeadscollapsed) {

      this.isApplicationCollapsed = true;
      this.iscollapsed = true;
      this.isVisaManagerCollapsed = true;
      this.isAccountCollapsed = true;
      this.isAdminCollapsed = true;
    }

  }

  toggleApplicationCollapsed() {
    this.isApplicationCollapsed = !this.isApplicationCollapsed;

    if (!this.isApplicationCollapsed) {

      this.isLeadscollapsed = true;
      this.iscollapsed = true;
      this.isVisaManagerCollapsed = true;
      this.isAccountCollapsed = true;
      this.isAdminCollapsed = true;
    }
  }

  toggleVisaManagerCollapsed() {
    this.isVisaManagerCollapsed = !this.isVisaManagerCollapsed;

    if (!this.isVisaManagerCollapsed) {

      this.isLeadscollapsed = true;
      this.iscollapsed = true;
      this.isApplicationCollapsed = true;
      this.isAccountCollapsed = true;
      this.isAdminCollapsed = true;
    }
  }
  toggleAccountCollapsed() {
    this.isAccountCollapsed = !this.isAccountCollapsed;

    if (!this.isAccountCollapsed) {

      this.isLeadscollapsed = true;
      this.iscollapsed = true;
      this.isVisaManagerCollapsed = true;
      this.isApplicationCollapsed = true;
      this.isAdminCollapsed = true;
    }
  }
  toggleAdminCollapsed() {
    this.isAdminCollapsed = !this.isAdminCollapsed;
    if (!this.isAdminCollapsed) {

      this.isLeadscollapsed = true;
      this.iscollapsed = true;
      this.isVisaManagerCollapsed = true;
      this.isAccountCollapsed = true;
      this.isApplicationCollapsed = true;
    }
  }
    toggleUniversityCollapsed() {
      this.isUniversityCollapsed = !this.isUniversityCollapsed;
      if (!this.isUniversityCollapsed) {

        this.isLeadscollapsed = true;
        this.iscollapsed = true;
        this.isVisaManagerCollapsed = true;
        this.isAccountCollapsed = true;
        this.isApplicationCollapsed = true;
      }
    }

  toggleSuperAdminCollapsed() {
    this.isSuperAdminCollapsed = !this.isSuperAdminCollapsed;
  }
/* Rols Validation */
  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminMenu = this.roles.includes('ROLE_ADMIN');
      this.showStudentMenu = this.roles.includes('ROLE_STUDENT');
      this.showAccountMenu = this.roles.includes('ROLE_ACCOUNT');
      this.showApplicationMenu = this.roles.includes('ROLE_APPLICATION');
      this.showVisaMenu = this.roles.includes('ROLE_VISA');
      this.showSuperAdminMenu = this.roles.includes('ROLE_SUPER_ADMIN');

      this.username = user.username;
      this.organizationName = user.organizationName;
      console.log(this.username);
      console.log(this.organizationName);
      if (this.isLoggedIn == true) {
        this.router.navigate(['/dashboard']);
      }
    }else{
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  

}
