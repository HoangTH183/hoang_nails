import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: number;
  name: string;
  category: string;
  status: string;
  create_at: string;
}

/** Constants used to fill up our data base. */
const CREATE_AT: string[] = [
  '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020',
  '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020'
];
const NAMES: string[] = [
  'Grace1', 'Grace2', 'Grace3', 'Grace4', 'Grace5', 'Hopper6', 'Hopper7', 'Hopper8', 'Hopper9', 'SHopper0',
  'Grace11', 'Grace12', 'Grace13', 'Grace14', 'Grace15', 'Hopper16', 'Hopper17', 'Hopper18', 'Hopper19', 'Hopper11'
];
const CATEGORY: string[] = [
  'Techincal1', 'Techincal2', 'Techincal3', 'Techincal4', 'Techincal5', 'Other6', 'Other7', 'Other8', 'Other9', 'Other10',
  'Techincal11', 'Techincal12', 'Techincal13', 'Techincal14', 'Techincal15', 'Other16', 'Other17', 'Other18', 'Other19', 'Other11'
];
const STATUS: string[] = [
  '1', '1', '1', '1', '1', '0', '0', '0', '0', '0',
  '1', '1', '1', '1', '1', '0', '0', '0', '0', '0'
];

interface Name {
	name: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  name: Name[] = [
		{name: 'Salon1'},
		{name: 'Salon2'},
		{name: 'Salon3'},
		{name: 'Salon4'},
		{name: 'Salon5'},
		{name: 'Salon6'},
    {name: 'Salon7'}
  ];

  displayedColumns: string[] = ['id', 'name', 'category', 'status', 'create_at', 'action'];
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
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  return {
    id: id,
    name: name,
    category: CATEGORY[Math.round(Math.random() * (CATEGORY.length - 1))],
    status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
    create_at: CREATE_AT[Math.round(Math.random() * (CREATE_AT.length - 1))]
  };

}
