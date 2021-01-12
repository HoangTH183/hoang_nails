import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: number;
  firstname: string;
  lastname: string;
  typed: string;
  reward_point: string;
  status: string;
  create_at: string;
  salon:string;
}

interface Salon {
	name: string;
}
/** Constants used to fill up our data base. */
const CREATE_AT: string[] = [
  '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020',
  '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020'
];
const FIRSTNAME: string[] = [
  'Customer1', 'Customer2', 'Customer3', 'Customer4', 'Customer5', 'Customer6', 'Customer7', 'Customer8', 'Customer9', 'Customer10',
  'Customer11', 'Customer12', 'Customer13', 'Customer14', 'Customer15', 'Customer16', 'Customer17', 'Customer18', 'Customer19', 'Customer20'
];
const STATUS: string[] = [
  '1', '1', '1', '1', '1', '0', '0', '0', '0', '0',
  '1', '1', '1', '1', '1', '0', '0', '0', '0', '0'
];

const LASTNAME: string[] = [
  'Hoang1', 'Hoang2', 'Hoang3', 'Hoang4', 'Hoang5', 'Hoang6', 'Hoang7', 'Hoang8', 'Hoang9', 'Hoang10',
  'Hoang11', 'Hoang12', 'Hoang13', 'Hoang14', 'Hoang15', 'Hoang16', 'Hoang17', 'Hoang18', 'Hoang19', 'Hoang20'
];
const TYPED: string[] = [
  'VIP', 'VIP', 'VIP', 'VIP', '', '', '', '', '', '',
  'VIP', 'VIP', 'VIP', 'VIP', '', '', '', '', '', ''
]
const REWARDPOINT: string[] = [
  '100', '100', '100', '100', '10', '220', '220', '220', '30', '30',
  '100', '100', '100', '100', '100', '220', '220', '220', '220', '220'
];
const SALON: string[] = [
  'Salon1', 'Salon2', 'Salon3', 'Salon4', 'Salon5', 'Salon6', 'Salon7'
];

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerListComponent implements OnInit {

  salons = [
		{name: 'Salon1'},
		{name: 'Salon2'},
		{name: 'Salon3'},
		{name: 'Salon4'},
		{name: 'Salon5'},
		{name: 'Salon6'},
    {name: 'Salon7'}
  ];

  value: string;
  Salon = this.salons;

  filter(value: string) {
    if (value) {
      return this.salons.filter(salon => salon.name.toLowerCase().startsWith(value.toLowerCase()));
    }

    return this.salons;
  }

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'typed', 'reward_point', 'status', 'create_at', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  return {
    id: id,
    firstname: FIRSTNAME[Math.round(Math.random() * (FIRSTNAME.length - 1))],
    lastname: LASTNAME[Math.round(Math.random() * (FIRSTNAME.length - 1))],
    typed: TYPED[Math.round(Math.random() * (FIRSTNAME.length - 1))],
    reward_point: REWARDPOINT[Math.round(Math.random() * (FIRSTNAME.length - 1))],
    status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
    create_at: CREATE_AT[Math.round(Math.random() * (CREATE_AT.length - 1))],
    salon: SALON[Math.round(Math.random() * (CREATE_AT.length - 1))],
  };

}
