import { BaseService } from './../../../core/services/base.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService, StartupService, TokenService } from '@core';
import { log } from 'util';
import { AccountServices } from '../../services/account.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private baseService : BaseService,
    private fb: FormBuilder,
    private router: Router,
    private token: TokenService,
    private startup: StartupService,
    private settings: SettingsService,
    private accountServices: AccountServices,
  ) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
  
  login() {
    this.accountServices.login(this.loginForm.value).subscribe(item => {
      if(item.message == 'login success'){
        this.router.navigateByUrl('/dashboard');
        console.log("Success login");
        // this._store.dispatch(new userLogins.CheckLoginAction({
        //     id:item.data[0].id,
        //     name:item.data[0].name,
        //     email:item.data[0].email,
        //     password:item.data[0].password,
        //     remember_token:item.data[0].remember_token
        //   }));
        this.router.navigate(['/dashboard']);
      }else {
        this.router.navigateByUrl('/auth/login')
      }
    })
  }
}
