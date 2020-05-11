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

  title = 'crs-front-end';

  toggleCollapsed() {
    this.iscollapsed = !this.iscollapsed;
  }
  toggleLeadsCollapsed() {
    this.isLeadscollapsed = !this.isLeadscollapsed;
  }

  toggleApplicationCollapsed() {
    this.isApplicationCollapsed = !this.isApplicationCollapsed;
  }

  toggleVisaManagerCollapsed() {
    this.isVisaManagerCollapsed = !this.isVisaManagerCollapsed;
  }
  toggleAccountCollapsed() {
    this.isAccountCollapsed = !this.isAccountCollapsed;
  }
  toggleAdminCollapsed() {
    this.isAdminCollapsed = !this.isAdminCollapsed;
  }
}
