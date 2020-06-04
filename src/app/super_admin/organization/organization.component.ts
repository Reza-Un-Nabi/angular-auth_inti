import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../_services/organization.service';
import {Organization} from '../../models/organization';
import { Observable } from 'rxjs';
import { FormBuilder, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})


export class OrganizationComponent implements OnInit {
organization: Organization;
organizations: Observable<Organization[]>; 
organizationForm: FormGroup;
organizationList:any;
isupdated = false;

  constructor(
    private organaigationService: OrganizationService,
    private formBuilder: FormBuilder
    ) { 
    this.organization = new Organization;
  }

  ngOnInit() {
    
    this.resetAddFormField ();
    //this.getCheckingOrganize();
   this.getAllOrganizationList();
 
  }
  insertOrganization(): void {
    
    this.organaigationService.save(this.organization).subscribe(data => {

    });
    this.resetAddFormField();
    //get Organization list
    this.getAllOrganizationList();

  }

  getAllOrganizationList ():void {
    this.organaigationService.getAll().subscribe(data=>{
      this.organizations = data;
    });
  }
//reset Organization Form Field
  resetAddFormField () {
    this.organizationForm = this.formBuilder.group({
      name: [''],
      email: [''],
      address: ['']
    });
  }

/*   getCheckingOrganize ():void {
    this.organaigationService.checkOrganizeAuth().subscribe(data =>{

    });
  } */


  // get Organization by id
 getOrganizationById(id:number) {

  this.organaigationService.getOrganizationById(id).subscribe(data =>{
    this.organizationList=data;
  });
 } 

// form group of employee update

organizUpdateform = new FormGroup({
  org_id: new FormControl(),
  org_name: new FormControl(),
  org_email: new FormControl(),
  org_address: new FormControl()
 

});

updateEmp(updstu) {

 }
/* get orgId () {
  return this.organizUpdateform.get("org_id");
} */
}
