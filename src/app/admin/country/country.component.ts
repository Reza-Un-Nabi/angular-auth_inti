import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../_services/module_service/country.service';
import { Country } from '../../models/country';
import { Observable } from 'rxjs';
import { FormBuilder, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import {MessageService} from '../../_services/message.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {
  countryForm: FormGroup;
  country: Country;
  countries: Observable<Country[]>;
  countryList: any;
  isupdated = false;

  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder,
    private messageService: MessageService
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
}
