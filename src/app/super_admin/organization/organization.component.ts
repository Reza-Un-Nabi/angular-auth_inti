import { Component, OnInit,NgModule } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import {OrganizationService} from '../../_services/module_service/organization.service';
import {Organization} from '../../models/organization';
import { Observable } from 'rxjs';
import {MessageService} from '../../_services/message.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})


export class OrganizationComponent implements OnInit {
closeResult: string;
organiz : Organization;
organization: Organization;
organizations: Observable<Organization[]>; 
organizationForm: FormGroup;
organizationList:any;
isupdated = false;

  constructor(
    private organaigationService: OrganizationService,
    private formBuilder: FormBuilder,
    private formsModule: FormsModule,
    private messageService: MessageService,
    private modalService: NgbModal
    ) { 
    this.organization = new Organization;
  }

  ngOnInit() {
    
    this.resetAddFormField ();
    //this.getCheckingOrganize();
   this.getAllOrganizationList();
 
  }
  insertOrganization(): void {
    
    this.organaigationService.save(this.organization).subscribe(res => {
      this.messageService.add(res.message);
      
      if(res.status=='ok'){
        this.getAllOrganizationList();
        this.resetAddFormField();
      }
    });
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

// form group of Organization update

organizUpdateform = new FormGroup({
  org_id: new FormControl(),
  org_name: new FormControl(),
  org_email: new FormControl(),
  org_address: new FormControl()
 

});

updateOrg() {

  this.organiz = new Organization();
  this.organiz.id = this.organizUpdateform.get("org_id").value;
  this.organiz.name = this.organizUpdateform.get("org_name").value;
  this.organiz.email = this.organizUpdateform.get("org_email").value;
  this.organiz.address = this.organizUpdateform.get("org_address").value;

  this.organaigationService.updateOrganization(this.organiz).subscribe(res => {
   
    if(res.status=='ok'){
      this.isupdated = true;
      this.getAllOrganizationList();
    }
    
  });
  
 }


/* for popup OK,close Button */
open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}

/* end popup */
}
