import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../_services/organization.service';
import {Organization} from '../../models/organization';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})


export class OrganizationComponent implements OnInit {
organization: Organization;
organizations: Observable<Organization[]>; 


  constructor(
    private organaigationService: OrganizationService,
 
    ) { 
    this.organization = new Organization;
  }

  ngOnInit() {
    
   this.getAllOrganizationList();
  
  }
  insertOrganization(): void {
    
    this.organaigationService.save(this.organization).subscribe(data => {

    });

    //get Organization list
    this.getAllOrganizationList();

  }

  getAllOrganizationList ():void {
    this.organaigationService.getAll().subscribe(data=>{
      this.organizations = data;
    });
  }
}
