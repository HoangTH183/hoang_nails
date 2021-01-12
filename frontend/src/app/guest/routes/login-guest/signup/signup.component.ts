import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  openDialog(){
    this.dialog.open(SignupDialogComponent)
  }
  guestForm: FormGroup;
  constructor(private guestFB: FormBuilder, public dialog: MatDialog) {}

  clearSubmit() {
    this.guestForm.reset();
  }

  ngOnInit(): void {
    this.guestForm = this.guestFB.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      birthday: [null, [Validators.required]],
    });
  }
}
