import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-student-tracker',
  templateUrl: './student-tracker.component.html',
  styleUrls: ['./student-tracker.component.css']
})
export class StudentTrackerComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = 1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Students',
            link: './trackStudents',
            index: 0
        }, {
            label: 'Follow Up',
            link: './followupStudent',
            index: 1
        }, {
            label: 'Drop Plan',
            link: './dropplanStudent',
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
