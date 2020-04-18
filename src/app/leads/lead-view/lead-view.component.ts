import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-lead-view',
  templateUrl: './lead-view.component.html',
  styleUrls: ['./lead-view.component.css']
})
export class LeadViewComponent implements OnInit {

    navLinks: any[];
    activeLinkIndex = 1;
    constructor(private router: Router) {
      this.navLinks = [
          {
              label: 'Lead Dashboard',
              link: './trackStudents',
              index: 0
          }, {
              label: 'Lead Tracker',
              link: './trackStudents',
              index: 1
          }, {
              label: 'View Leads',
              link: './trackStudents',
              index: 2
          },

      ];
    }


  ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
        });
      }

}
