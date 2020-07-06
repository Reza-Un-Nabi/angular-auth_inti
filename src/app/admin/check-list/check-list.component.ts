import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CheckList } from '../../models/checkList';
import {CheckListService} from '../../_services/module_service/checkList.service'
import { MessageService } from '../../_services/message.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  closeResult: string;
  checklistForm: FormGroup;
  submitted = false;
  checkList: CheckList;
  checklistValueById: any;
  checklistList: Observable<CheckList[]>;
  updateSubmitted = false;
  updateMessage: any;
  isupdated = false;
  updateCheckList: CheckList;

  constructor(
    private formBuilder: FormBuilder,
    private checklistService: CheckListService,
    private messageService: MessageService,
    private modalService: NgbModal
  ) {
    this.checkList = new CheckList;
  }

  ngOnInit() {

    //get all branch
    this.getAllCheckList();
    this.resetAddFormField();
    
    // form validation
    this.checklistForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });

  }

  /* insert CheckList */
  insertCheckList(): void {

    // stop here if form is invalid
    this.submitted = true;
    if (this.checklistForm.invalid) {
      return;
    }

    this.checklistService.save(this.checklistForm.value).subscribe(res => {
      this.messageService.add(res.message);
      if(res.status=='ok'){
        this.getAllCheckList();
        this.resetAddFormField();
      }
      
    })
  }

  //get all CheckList
  getAllCheckList() {
    
    this.checklistService.getAllcheckList().subscribe(res => {
      this.checklistList = res;
    })
  }


  // get CheckList by id
  getCheckListById(id: number) {

    this.checklistService.getCheckListById(id).subscribe(data => {
      this.checklistValueById = data;
    });
  }

  //update CheckList 
  updateCheckListValue(){
    // stop here if form is invalid
    this.updateSubmitted = true;
    if (this.updateChecklistForm.invalid) {
      return;
    }
    this.updateCheckList = new CheckList();
    this.updateCheckList.id = this.updateChecklistForm.get("bra_id").value;
    this.updateCheckList.name = this.updateChecklistForm.get("bra_name").value;
    this.checklistService.updateCheckList(this.updateCheckList).subscribe(res => {
  
      if(res.status=='ok'){
        this.isupdated = true;
        this.updateMessage = res.message;
        this.getAllCheckList();
      }else if (res.status=='failed') {
        this.isupdated = true;
        this.updateMessage = res.message;
        this.getAllCheckList();
      }
    });
  }

   // form validation
   updateChecklistForm = this.formBuilder.group({
    bra_id:['',[Validators.required]],
    bra_name: ['', [Validators.required]]
  });
  
  //reset Admin User Form Field
  resetAddFormField() {
    this.checklistForm = this.formBuilder.group({
      name: ['']

    });
  }



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
}
