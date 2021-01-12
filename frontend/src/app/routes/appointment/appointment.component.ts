import { Component, OnInit} from "@angular/core";

import { MatDialog } from '@angular/material/dialog';
import { AddAppointmentComponent } from "./add-appointment/add-appointment.component";

export interface Tile{
  cols: number;
  rows: number;
  text: string;
  color: string;
  background: string;
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
    {text: '6:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '7:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: 'Customer1: 7:00 AM - 9:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#fff59d'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '8:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff59d'},
    {text: 'Customer1: 8:00 AM - 10:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#ce93d8'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '9:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: 'Customer1: 9:00 AM - 11:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#ce93d8'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#ce93d8'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '10:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#ce93d8'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '11:00 AM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '12:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '1:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '2:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '3:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '4:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '5:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '6:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '7:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '8:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '9:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '10:00 PM', cols: 1, rows: 1 ,color: '#000', background: '#a4a4a4'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
    {text: '', cols: 1, rows: 1 ,color: '#000', background: '#fff'},
  ];
}