import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  displayedColumns = ['fullname', 'phone', 'action'];
  dataSource = ELEMENT_DATA;

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}

