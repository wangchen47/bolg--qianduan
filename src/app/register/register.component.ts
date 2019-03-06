import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validateForm: FormGroup;
  error: string;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    this.registerService.register(this.validateForm.value).subscribe((data) => {
      console.log(data);
      setTimeout(() => {
        localStorage.setItem('name', data.name);
        localStorage.setItem('password', data.password);
        localStorage.setItem('token', data.token);
      }, 1000);
    },
      (error) => {
        this.error = error;
        console.log(this.error);
        },
      );
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  };

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name             : [ null, [ Validators.required, Validators.maxLength(32) ] ],
      password         : [ null, [ Validators.required, Validators.minLength(6) ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
    });
  }

}
