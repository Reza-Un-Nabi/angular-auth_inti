import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminUser } from '../../models/adminUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  adminUserForm: FormGroup;
  submitted = false;
  adminUser: AdminUser;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.adminUser = new AdminUser;
  }

  ngOnInit() {
    this.adminUserForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
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

  /* insert Admin User */
  insertUserAdmin() {

  }

}
