import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SmsTemplate } from '../../models/smsTemplate';
import { SmsTemplateService } from '../../_services/module_service/smsTemplate.service';
import { MessageService } from '../../_services/message.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sms-template',
  templateUrl: './sms-template.component.html',
  styleUrls: ['./sms-template.component.css']
})
export class SmsTemplateComponent implements OnInit {

  closeResult: string;
  smstemplateForm: FormGroup;
  submitted = false;
  smsTemplate: SmsTemplate;
  smsValueById: any;
  smsTempList: Observable<SmsTemplate[]>;
  updateSubmitted = false;
  updateMessage: any;
  isupdated = false;
  updateSmsTemp: SmsTemplate;
  constructor(
    private formBuilder: FormBuilder,
    private smstemplateService: SmsTemplateService,
    private messageService: MessageService,
    private modalService: NgbModal
  ) {
    this.smsTemplate = new SmsTemplate;
  }

  ngOnInit() {

    this.getAllSmsTeplate();
    this.resetAddFormField();
    // form validation
    this.smstemplateForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });
  }

   /* insert CheckList */
   insertSmsTemp(): void {

    // stop here if form is invalid
    this.submitted = true;
    if (this.smstemplateForm.invalid) {
      return;
    }

    this.smstemplateService.save(this.smstemplateForm.value).subscribe(res => {
      this.messageService.add(res.message);
      if(res.status=='ok'){
        this.getAllSmsTeplate();
        this.resetAddFormField();
      }
      
    })
  }

  //get all CheckList
  getAllSmsTeplate() {
    
    this.smstemplateService.getAllSmsTemplate().subscribe(res => {
      this.smsTempList = res;
    })
  }


  // get CheckList by id
  getSmsTeplateById(id: number) {

    this.smstemplateService.getSmsTemplateById(id).subscribe(data => {
      this.smsValueById = data;
      console.log(this.smsValueById);
    });
  }

   //reset Admin User Form Field
   resetAddFormField() {
    this.smstemplateForm = this.formBuilder.group({
      title: [''],
      body: ['']

    });
  }
 // form update validation
 updateSmsTempForm = this.formBuilder.group({
  bra_id: ['', [Validators.required]],
  bra_title: ['', [Validators.required]],
  bra_body: ['', [Validators.required]]
});
  /*  //update branch 
   updateBranchValue() {
    // stop here if form is invalid
    this.updateSubmitted = true;
    if (this.updateSmsTempForm.invalid) {
      return;
    }
    this.updateSmsTemp = new SmsTemplate();
    this.updateSmsTemp.id = this.updateSmsTempForm.get("bra_id").value;
    this.updateSmsTemp.title = this.updateSmsTempForm.get("bra_name").value;
    this.smstemplateService.up(this.updateSmsTemp).subscribe(res => {

      if (res.status == 'ok') {
        this.isupdated = true;
        this.updateMessage = res.message;
        this.getAllSmsTeplate();
      } else if (res.status == 'failed') {
        this.isupdated = true;
        this.updateMessage = res.message;
        this.getAllSmsTeplate();
      }
    });
  } */

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
