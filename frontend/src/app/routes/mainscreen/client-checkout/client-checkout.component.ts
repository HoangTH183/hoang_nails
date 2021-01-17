import { DiscountTicketComponent } from './discount-ticket/discount-ticket.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDiscountComponent } from '../add-discount/add-discount.component';
import { AddTipComponent } from '../add-tip/add-tip.component';

const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, name: 'Hydrogen', price: 1.0079, disc: 'H' },
  { no: 2, name: 'Helium', price: 4.0026, disc: 'He' },
  { no: 3, name: 'Lithium', price: 6.941, disc: 'Li' },
  { no: 4, name: 'Beryllium', price: 9.0122, disc: 'Be' },
];
export interface PeriodicElement {
  no: number;
  name: string;
  price: number;
  disc: string;
}
@Component({
  selector: 'app-client-checkout',
  templateUrl: './client-checkout.component.html',
  styleUrls: ['./client-checkout.component.scss'],
})
export class ClientCheckoutComponent implements OnInit {
  displayedColumns = ['no', 'name', 'name', 'price', 'disc'];
  dataSource = ELEMENT_DATA;

  openDiscount(){
    this.dialog.open(DiscountTicketComponent)
  }

  
  addtipDialog(){
    this.dialog.open(AddTipComponent)
  }

  adddiscountDialog(){
    this.dialog.open(AddDiscountComponent)
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}
