import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface UserData {
  id: number;
  name: string;
  status: string;
  create_at: string;
}

/** Constants used to fill up our data base. */
const CREATE_AT: string[] = [
  '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020',
  '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020', '24/12/2020'
];
const NAMES: string[] = [
  'Salon1', 'Salon2', 'Salon3', 'Salon4', 'Salon5', 'Salon6', 'Salon7', 'Salon8', 'Salon9', 'Salon10',
  'Salon11', 'Salon12', 'Salon13', 'Salon14', 'Salon15', 'Salon16', 'Salon17', 'Salon18', 'Salon19', 'Salon11'
];
const STATUS: string[] = [
  '1', '1', '1', '1', '1', '0', '0', '0', '0', '0',
  '1', '1', '1', '1', '1', '0', '0', '0', '0', '0'
];

interface Salon {
	name: string;
}


@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss']
})
export class ProductCategoryListComponent implements OnInit {

  salon: Salon[] = [
		{name: 'Salon1'},
		{name: 'Salon2'},
		{name: 'Salon3'},
		{name: 'Salon4'},
		{name: 'Salon5'},
		{name: 'Salon6'},
    {name: 'Salon7'}
  ];

  displayedColumns: string[] = ['id', 'name', 'status', 'create_at', 'action'];
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
    status: STATUS[Math.round(Math.random() * (STATUS.length - 1))],
    create_at: CREATE_AT[Math.round(Math.random() * (CREATE_AT.length - 1))]
  };

}
