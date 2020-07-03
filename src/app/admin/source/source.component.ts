import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Source } from '../../models/source';
import {SourceService} from '../../_services/module_service/source.service'
import { MessageService } from '../../_services/message.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  closeResult: string;
  sourceForm: FormGroup;
  submitted = false;
  source: Source;
  sourceValue: any;
  sourceList: Observable<Source[]>;
  updateSubmitted = false;
  updateMessage: any;
  isupdated = false;
  updateSource: Source;

  constructor(
    private formBuilder: FormBuilder,
    private sourceService: SourceService,
    private messageService: MessageService,
    private modalService: NgbModal
  ) {
    this.source = new Source;
  }

  ngOnInit() {

    //get all branch
    this.getAllSource();
    this.resetAddFormField();
    
    // form validation
    this.sourceForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });

  }

  /* insert Admin User */
  insertSource(): void {

    // stop here if form is invalid
    this.submitted = true;
    if (this.sourceForm.invalid) {
      return;
    }

    this.sourceService.save(this.sourceForm.value).subscribe(res => {
      this.messageService.add(res.message);
      if(res.status=='ok'){
        this.getAllSource();
        this.resetAddFormField();
      }
      
    })
  }

  //get all Branch
  getAllSource() {
    
    this.sourceService.getAllSource().subscribe(res => {
      this.sourceList = res;
    })
  }


  // get Branch by id
  getSourceById(id: number) {

    this.sourceService.getSourceById(id).subscribe(data => {
      this.sourceValue = data;
    });
  }

  //update branch 
  updateSourceValue(){
    // stop here if form is invalid
    this.updateSubmitted = true;
    if (this.updateSourceForm.invalid) {
      return;
    }
    this.updateSource = new Source();
    this.updateSource.id = this.updateSourceForm.get("bra_id").value;
    this.updateSource.name = this.updateSourceForm.get("bra_name").value;
    this.sourceService.updateSource(this.updateSource).subscribe(res => {
  
      if(res.status=='ok'){
        this.isupdated = true;
        this.updateMessage = res.message;
        this.getAllSource();
      }else if (res.status=='failed') {
        this.isupdated = true;
        this.updateMessage = res.message;
        this.getAllSource();
      }
    });
  }

   // form validation
   updateSourceForm = this.formBuilder.group({
    bra_id:['',[Validators.required]],
    bra_name: ['', [Validators.required]]
  });
  
  //reset Admin User Form Field
  resetAddFormField() {
    this.sourceForm = this.formBuilder.group({
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
