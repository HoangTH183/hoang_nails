import { BaseService } from './../../../core/services/base.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SettingsService, StartupService, TokenService } from '@core';
import { log } from 'util';
import { AccountServices } from '../../services/account.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  error = '';

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
    this.accountServices.login(this.loginForm.value).subscribe(
      data => {
        const { token, uid, username } = { token: data.data.access_token, uid: data.data.user_info.id, username: data.data.user_info.username };
        // Set user info
        this.settings.setUser({
          id: uid,
          name: data.data.user_info.name,
          email: data.data.user_info.email,
          avatar: './assets/images/avatar.jpg',
        });
        // Set token info
        this.token.set({ token, uid, username });
        // Regain the initial data
        this.startup.load().then(() => {
          let url = this.token.referrer!.url || '/dashboard';
          if (url.includes('/auth')) {
            url = '/';
          }
          this.router.navigateByUrl(url);
        });
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }
}
