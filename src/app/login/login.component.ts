import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  submitForm(): void {
          for (const i in this.validateForm.controls) {
          this.validateForm.controls[ i ].markAsDirty();
          this.validateForm.controls[ i ].updateValueAndValidity();
        }
        this.loginService.loginPost(this.validateForm.value).subscribe((data) => {
            if (data.status === 200) {
              localStorage.setItem('name', data.name);
              localStorage.setItem('password', data.password);
        localStorage.setItem('token', data.token);
        this.router.navigateByUrl('/home');
      } else {
        this.router.navigateByUrl('/login');
      }
    },
      (error) => {
        console.log(error);
        this.showError(error);
        }
      );
  }

  showSuccess(msg): void {
    this.notification.create('success', '成功', msg);
  }

  showError(msg): void {
    this.notification.create('error', '错误', msg);
  }

  constructor(private fb: FormBuilder, private loginService: LoginService,  private router: Router, private notification: NzNotificationService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [ null, [ Validators.required, Validators.maxLength(32) ] ],
      password: [ null, [ Validators.required, Validators.minLength(6) ] ],
    });
  }
}
