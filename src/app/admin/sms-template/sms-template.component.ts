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
    });
  }

   //reset Admin User Form Field
   resetAddFormField() {
    this.smstemplateForm = this.formBuilder.group({
      title: [''],
      body: ['']

    });
  }
}
