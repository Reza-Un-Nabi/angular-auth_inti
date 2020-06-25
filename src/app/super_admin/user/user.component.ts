import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {Organization} from '../../models/organization';
import { AdminUser } from '../../models/adminUser';
import {AdminUserService} from '../../_services/module_service/adminUser.service';
import {MessageService} from '../../_services/message.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  adminUserForm: FormGroup;
  submitted = false;
  adminUser: AdminUser;
  organizations: Observable<Organization[]>; 
  constructor(
    private formBuilder: FormBuilder,
    private adminUserService: AdminUserService,
    private messageService: MessageService
  ) {
    this.adminUser = new AdminUser;
  }

  ngOnInit() {
    //get all organization
    this.getAllOrganization();
    
    // form validation
    this.adminUserForm = this.formBuilder.group({
      role: [''],
      organizationId: ['',[Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['',[Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validators: this.ConfirmedValidator('password', 'confirm_password')
    });
  }

  /* Password comfirm */
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminUserForm.invalid) {
      return;
    }
  }

  //get all organization
  getAllOrganization ():void {
    this.adminUserService.getAllOrganization().subscribe(res =>{
      this.organizations =res;
      console.log(this.organizations);
    })
  }
  /* insert Admin User */
  insertUserAdmin():void {
    let arr = [];
    let role = 'admin';
    arr.push(role);
    this.adminUserForm.controls['role'].patchValue(arr);
    console.log(this.adminUserForm.value);
    this.adminUserService.saveUser(this.adminUserForm.value).subscribe(res =>{
      this.messageService.add(res.message);
      if(res.status=='ok'){
        this.resetAddFormField();
      }
    })
  }
//reset Admin User Form Field
resetAddFormField () {
  this.adminUserForm = this.formBuilder.group({
    organizationId: [''],
    firstName: [''],
    lastName: [''],
    email: [''],
    username: [''],
    password: [''],
    confirm_password: ['']
  });
}
}
