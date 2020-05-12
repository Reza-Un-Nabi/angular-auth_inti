import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-student-invoice',
  templateUrl: './student-invoice.component.html',
  styleUrls: ['./student-invoice.component.css']
})
export class StudentInvoiceComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = 1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Pending Invoices',
            link: './studentPendingInvoice',
            index: 0
        }, {
            label: 'Paid Invoices',
            link: './studentPaidInvoice',
            index: 1
        }, {
            label: 'Feature Invoices',
            link: './studentFeatureInvoice',
            index: 2
        }
     
    ]; 
  }
    ngOnInit(): void {
      this.router.events.subscribe((res) => {
          this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      });
    }

}
