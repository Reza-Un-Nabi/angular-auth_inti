import { Component, OnInit,ViewChild } from '@angular/core';
import { UniversityService } from '../../_services/module_service/university.service';
import { University } from '../../models/university';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MessageService} from '../../_services/message.service';
import {NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { CountryService } from '../../_services/module_service/country.service';
import { Country } from '../../models/country';

@Component({
  selector: 'app-view-university',
  templateUrl: './view-university.component.html',
  styleUrls: ['./view-university.component.css']
})
export class ViewUniversityComponent implements OnInit {
 
  universities:[];
  dataSource:any;
  closeResult: string;
  isupdated = false;
  updateMessage: any;
  updateSubmitted = false;
  updateUniversity: University;
singleUniversity: any;
countries: Observable<Country[]>;

  constructor(
    private universityService: UniversityService,
    private messageService: MessageService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private countryService: CountryService

  ) { }

 

  ngOnInit() {
    this.getAllUniversityList();
    this.getAllCountryList();
  }

  getAllUniversityList(): void {
    this.universityService.getAllUniversity().subscribe(data => {
      this.universities= data;
      //data for table
    this.dataSource = new MatTableDataSource(this.universities);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });
  }

 // get University by id
 getUniversityById(id: number) {
  this.universityService.singleUniversity(id).subscribe(data => {
    this.singleUniversity = data;
  });
}
 //update University 
 updateUniversityValue(){
  // stop here if form is invalid
  this.updateSubmitted = true;
  if (this.updateUniversityForm.invalid) {
    return;
  }
  this.updateUniversity = new University();
  this.updateUniversity.id = this.updateUniversityForm.get("uni_id").value;
  this.updateUniversity.uniName = this.updateUniversityForm.get("uni_name").value;
  this.updateUniversity.uniwebSite = this.updateUniversityForm.get("uni_website").value;
  this.updateUniversity.uniEmail = this.updateUniversityForm.get("uni_email").value;
  this.updateUniversity.uniContract = this.updateUniversityForm.get("uni_contact").value;
  this.updateUniversity.countryId = this.updateUniversityForm.get("uni_countryId").value;
  this.universityService.updateUniversity(this.updateUniversity).subscribe(res => {

    if(res.status=='ok'){
      this.isupdated = true;
      this.updateMessage = res.message;
      this.getAllUniversityList();
    }else if (res.status=='failed') {
      this.isupdated = true;
      this.updateMessage = res.message;
      this.getAllUniversityList();
    }
  });
}
  // update form validation
  updateUniversityForm = this.formBuilder.group({
    uni_id:['',[Validators.required]],
    uni_name: ['', [Validators.required]],
    uni_website: ['', [Validators.required]],
    uni_email: ['', [Validators.required]],
    uni_contact: [''],
    uni_countryId:['']
  });

//delete University
deleteUniversity (id: number){
  this.universityService.deleteUniversity(id).subscribe(res => {
    if(res.status=='ok'){
      this.messageService.add(res.message);
      this.getAllUniversityList();
    }else if (res.status=='failed') {
      this.messageService.add(res.message);
      this.getAllUniversityList();
    }
  });
  
}



  // all country for dropdown
  getAllCountryList(): void {
    this.countryService.getAllCountry().subscribe(data=>{
        this.countries = data;
    });

  }
   // for data table 
   displayedColumns: string[] = ['Sr No.','countryName','uniName','uniwebSite','uniEmail','uniContract','Action'];

   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }

   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   @ViewChild(MatSort, {static: true}) sort: MatSort;
// end data table


  /* for popup OK,close Button */
  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.isupdated = false;
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

