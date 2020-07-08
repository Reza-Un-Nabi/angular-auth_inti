import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';


import { CountryService } from '../../_services/module_service/country.service';
import { Country } from '../../models/country';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-university',
  templateUrl: './view-university.component.html',
  styleUrls: ['./view-university.component.css']
})
export class ViewUniversityComponent implements OnInit {

  countryViewForm: FormGroup;
  countries: Observable<Country[]>;
//   countries = ['USA', 'Canada', 'Uk']
  constructor(private fb: FormBuilder,
  private countryService: CountryService
  ) {}

  ngOnInit() {
   this.countryViewForm = this.fb.group({
     countryControl: ['Canada']
   });
   this.getAllCountryList();
  }

  getAllCountryList(): void {
      this.countryService.getAllCountry().subscribe(data=>{
          this.countries = data;
      });

    }

}
