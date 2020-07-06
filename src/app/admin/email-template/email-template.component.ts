import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmailTemplate } from '../../models/emailTemplate';
import {EmailTemplateService} from '../../_services/module_service/emailTemplate.service';
import { MessageService } from '../../_services/message.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.css']
})
export class EmailTemplateComponent implements OnInit {

  closeResult: string;
  emailtemplateForm: FormGroup;
  submitted = false;
  emailTemplate: EmailTemplate;
  emailTempValueById: any;
  emailTempList: Observable<EmailTemplate[]>;
  updateSubmitted = false;
  updateMessage: any;
  isupdated = false;
  updateEmailTemp: EmailTemplate;
  constructor(
    private formBuilder: FormBuilder,
    private emailtemplateService: EmailTemplateService,
    private messageService: MessageService,
    private modalService: NgbModal
  ) {
    this.emailTemplate = new EmailTemplate;
  }

  ngOnInit() {

    this.getAllEmailTeplate();
    this.resetAddFormField();
    // form validation
    this.emailtemplateForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]]
    });
  }

   /* insert CheckList */
   insertEmailTemp(): void {

    // stop here if form is invalid
    this.submitted = true;
    if (this.emailtemplateForm.invalid) {
      return;
    }

    this.emailtemplateService.save(this.emailtemplateForm.value).subscribe(res => {
      this.messageService.add(res.message);
      if(res.status=='ok'){
        this.getAllEmailTeplate();
        this.resetAddFormField();
      }
      
    })
  }

  //get all CheckList
  getAllEmailTeplate() {
    
    this.emailtemplateService.getAllEmailTemplate().subscribe(res => {
      this.emailTempList = res;
    })
  }


  // get CheckList by id
  getEmailTeplateById(id: number) {

    this.emailtemplateService.getEmailTemplateById(id).subscribe(data => {
      this.emailTempValueById = data;
    });
  }

   //reset Admin User Form Field
   resetAddFormField() {
    this.emailtemplateForm = this.formBuilder.group({
      title: [''],
      body: ['']

    });
  }

}
