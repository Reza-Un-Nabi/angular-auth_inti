import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iscollapsed: boolean = true;
  isLeadscollapsed: boolean = true;
  isApplicationCollapsed: boolean = true;
  isVisaManagerCollapsed: boolean = true;
  isAccountCollapsed: boolean = true;
  isAdminCollapsed: boolean = true;
  isUniversityCollapsed = true;

  title = 'crs-front-end';

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
}
