import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-university-invoice',
  templateUrl: './university-invoice.component.html',
  styleUrls: ['./university-invoice.component.css']
})
export class UniversityInvoiceComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = 1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Pending Invoices',
            link: './universityPendingInvoice',
            index: 0
        }, {
            label: 'Paid Invoices',
            link: './universityPaidInvoice',
            index: 1
        }, {
            label: 'Feature Invoices',
            link: './universityFeatureInvoice',
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
