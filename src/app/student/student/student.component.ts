import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = 1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Personal Details',
            link: './addStudent',
            index: 0
        }, {
            label: 'Academic Details',
            link: './academic',
            index: 1
        }, {
            label: 'English Language Test',
            link: './language',
            index: 2
        }, 
        {
          label: 'Passport',
          link: './passport',
          index: 3
      }, 
    ]; 
  }
    ngOnInit(): void {
      this.router.events.subscribe((res) => {
          this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      });
    }

}
