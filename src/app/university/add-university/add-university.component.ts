import { Component, OnInit } from '@angular/core';
import { University } from '../../models/university';
import { UniversityService } from '../../_services/module_service/university.service';
import { FormBuilder, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {
universityForm: FormGroup;
university: University;

    constructor(
      private universityService: UniversityService,
      private formBuilder: FormBuilder
    ) {
      this.university = new University;
    }

  ngOnInit() {
   this.resetAddFormField();
  }

  insertUniversity(): void {
  console.log(this.university);
    this.universityService.save(this.university).subscribe(data =>{

    });
      this.resetAddFormField();
//     this.getAllCountryList();
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
}
