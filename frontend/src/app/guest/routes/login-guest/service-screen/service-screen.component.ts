import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServiceScreenDialogComponent } from './service-screen-dialog/service-screen-dialog.component';

export interface PeriodicElement {
  fullname: string;
  phone: string;
  action: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { fullname: 'Chung Bui', phone: '0123456789', action: null },
  { fullname: 'Helium', phone: '1234567890', action: null },
  { fullname: 'Lithium', phone: '2315445456', action: null },
];

@Component({
  selector: 'app-service-screen',
  templateUrl: './service-screen.component.html',
  styleUrls: ['./service-screen.component.scss']
})
export class ServiceScreenComponent implements OnInit {

  openDialog(){
    this.dialog.open(ServiceScreenDialogComponent)
  }
  
  guestForm: FormGroup;
  constructor(private guestFB: FormBuilder, public dialog: MatDialog) {}

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
