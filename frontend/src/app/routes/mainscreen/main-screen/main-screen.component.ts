import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { SignInUpDialogComponent } from './sign-in-up-dialog/sign-in-up-dialog.component';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  openDetailCustomer(){
    this.dialog.open(DetailCustomerComponent)
  }

  openDialog(){
    this.dialog.open(SignInUpDialogComponent)
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
