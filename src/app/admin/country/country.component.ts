import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../_services/module_service/country.service';
import { Country } from '../../models/country';
import { Observable } from 'rxjs';
import { FormBuilder, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import {MessageService} from '../../_services/message.service';
import {NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {
  closeResult: string;
  countryForm: FormGroup;
  country: Country;
  countryUpdate: Country;
  countries: Observable<Country[]>;
  countryList: any;
  isupdated = false;
  updateMessage: any;
  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private modalService: NgbModal
  ) {
    this.country = new Country;
  }

  ngOnInit() {
    this.getAllCountryList();
    this.resetAddFormField();
  }

  insertCountry(): void {
    this.countryService.save(this.country).subscribe(res =>{
      this.messageService.add(res.message);
      
      if(res.status=='ok'){
        this.getAllCountryList();
        this.resetAddFormField();
      }
    });
   
   
    
  }
  getAllCountryList(): void {
    this.countryService.getAllCountry().subscribe(data=>{
        this.countries = data;
    });
    
  }

    // get Organization by id
 getOrganizationById(id:number) {

  this.countryService.getCountryById(id).subscribe(data =>{
    this.countryList=data;
  });
 } 

  //reset Organization Form Field
  resetAddFormField() {
    this.countryForm = this.formBuilder.group({
      name: ['']
    });
  }


  // form group of Country update

countryUpdateForm = new FormGroup({
  cont_id: new FormControl(),
  cont_name: new FormControl()
});

/* update Country Function */
updateCountry (): void {
  this.countryUpdate = new Country();
  this.countryUpdate.id = this.countryUpdateForm.get("cont_id").value;
  this.countryUpdate.name = this.countryUpdateForm.get("cont_name").value;
  this.countryService.updateCountry(this.countryUpdate).subscribe(res => {

    if(res.status=='ok'){
      this.isupdated = true;
      this.updateMessage = res.message;
      this.getAllCountryList();
    }else if (res.status=='failed') {
      this.isupdated = true;
      this.updateMessage = res.message;
      this.getAllCountryList();
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
