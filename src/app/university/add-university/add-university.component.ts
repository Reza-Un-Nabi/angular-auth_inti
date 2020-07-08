import { Component, OnInit } from '@angular/core';
import { University } from '../../models/university';
import { UniversityService } from '../../_services/module_service/university.service';
import { FormBuilder, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { CountryService } from '../../_services/module_service/country.service';
import { Country } from '../../models/country';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {
universityForm: FormGroup;
university: University;
countries: Observable<Country[]>;

    constructor(
      private universityService: UniversityService,
      private countryService: CountryService,
      private formBuilder: FormBuilder
    ) {
      this.university = new University;

    }

  ngOnInit() {
   this.resetAddFormField();
   this.getAllCountryList();
  }

  insertUniversity(): void {
  console.log(this.university);
    this.universityService.save(this.university).subscribe(data =>{

    });
      this.resetAddFormField();
  }

   //reset Organization Form Field
    resetAddFormField() {
      this.universityForm = this.formBuilder.group({
        uniName: [''],
        uniwebSite:[''],
        uniEmail:[''],
        uniContract:[''],
        countryId: ['']
      });
    }

     getAllCountryList(): void {
          this.countryService.getAllCountry().subscribe(data=>{
              this.countries = data;
          });

        }
}
