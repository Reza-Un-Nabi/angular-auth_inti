import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Branch } from '../../models/branch';
import { BranchService } from '../../_services/module_service/branch.service'
import { MessageService } from '../../_services/message.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  closeResult: string;
  branchForm: FormGroup;
  submitted = false;
  branch: Branch;
  branchValue: any;
  branchList: Observable<Branch[]>;
  updateSubmitted = false;
  updateMessage: any;
  isupdated = false;
  updateBranch: Branch;

  constructor(
    private formBuilder: FormBuilder,
    private branchService: BranchService,
    private messageService: MessageService,
    private modalService: NgbModal
  ) {
    this.branch = new Branch;
  }

  ngOnInit() {

    //get all branch
    this.getAllBranches();
    this.resetAddFormField();

    // form validation
    this.branchForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });

  }

  /* insert Admin User */
  insertBranch(): void {

    // stop here if form is invalid
    this.submitted = true;
    if (this.branchForm.invalid) {
      return;
    }

    this.branchService.save(this.branchForm.value).subscribe(res => {
      this.messageService.add(res.message);
      if (res.status == 'ok') {
        this.getAllBranches();
        this.resetAddFormField();
      }

    })
  }

  //get all Branch
  getAllBranches() {

    this.branchService.getAllBranch().subscribe(res => {
      this.branchList = res;
    })
  }


  // get Branch by id
  getBranchById(id: number) {

    this.branchService.getBranchById(id).subscribe(data => {
      this.branchValue = data;
    });
  }

  //update branch 
  updateBranchValue() {
    // stop here if form is invalid
    this.updateSubmitted = true;
    if (this.updateBranchForm.invalid) {
      return;
    }
    this.updateBranch = new Branch();
    this.updateBranch.id = this.updateBranchForm.get("bra_id").value;
    this.updateBranch.name = this.updateBranchForm.get("bra_name").value;
    this.branchService.updateBranch(this.updateBranch).subscribe(res => {

      if (res.status == 'ok') {
        this.isupdated = true;
        this.updateMessage = res.message;
        this.getAllBranches();
      } else if (res.status == 'failed') {
        this.isupdated = true;
        this.updateMessage = res.message;
        this.getAllBranches();
      }
    });
  }

  // form validation
  updateBranchForm = this.formBuilder.group({
    bra_id: ['', [Validators.required]],
    bra_name: ['', [Validators.required]]
  });

  //reset Admin User Form Field
  resetAddFormField() {
    this.branchForm = this.formBuilder.group({
      name: ['']

    });
  }



  /* for popup OK,close Button */
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
      return `with: ${reason}`;
    }
  }

  /* end popup */
}
