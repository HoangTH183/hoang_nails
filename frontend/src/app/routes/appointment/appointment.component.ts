import { Component, OnInit} from "@angular/core";

import { MatDialog } from '@angular/material/dialog';
import { AddAppointmentComponent } from "./add-appointment/add-appointment.component";

export interface Tile{
  cols: number;
  rows: number;
  text: string;
  color: string;
  background: string;
  icon: string;
}
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  appointmentDialog(){
    this.dialog.open(AddAppointmentComponent)
  }
  constructor(public dialog: MatDialog) {
  }
  ngOnInit(): void {
  }

  tiles: Tile[] = [
    {text: '6:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '7:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: 'Customer1: 7:00 AM - 9:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#fff59d', icon: 'edit'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '8:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff59d', icon: ''},
    {text: 'Customer1: 8:00 AM - 10:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#ce93d8', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '9:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: 'Customer1: 9:00 AM - 11:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#ce93d8', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#ce93d8', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '10:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#ce93d8', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '11:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '12:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '1:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '2:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '3:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '4:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '5:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '6:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '7:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '8:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '9:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '10:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff', icon: ''},
  ];
}