// import { BaseService } from './../../../../../core/services/base.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from './_reducers/user.reducer';

import { Observable, from } from 'rxjs';
import * as userLogins from './_actions/userActions';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in-up-dialog',
  templateUrl: './sign-in-up-dialog.component.html',
  styleUrls: ['./sign-in-up-dialog.component.scss'],
})
export class SignInUpDialogComponent implements OnInit {
  loading = false;
  error = '';
  constructor(
    private signFB: FormBuilder,
    private router: Router,
    // private baseService: BaseService,
  ) {}

  signForm: FormGroup;
  isCheckLogin: boolean = false;

  ngOnInit(): void {
    this.signForm = this.signFB.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    // this.baseService
    //   .login(this.signForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate(["/dashboard"]);
    //     },
    //     error => {
    //       this.error = error;
    //       this.loading = false;
    //     }
    //   );
  }
}
