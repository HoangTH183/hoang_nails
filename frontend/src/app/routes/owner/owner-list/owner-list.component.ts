import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { OwnerDataService } from '../../owner/data.service';
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
  'Owner1', 'Owner2', 'Owner3', 'Owner4', 'Owner5', 'Owner6', 'Owner7', 'Owner8', 'Owner9', 'Owner10',
  'Owner11', 'Owner12', 'Owner13', 'Owner14', 'Owner15', 'Owner16', 'Owner17', 'Owner18', 'Owner19', 'Owner20'
];
const STATUS: string[] = [
  '1', '1', '1', '1', '1', '0', '0', '0', '0', '0',
  '1', '1', '1', '1', '1', '0', '0', '0', '0', '0'
];

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss'],
  providers: [OwnerDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OwnerListComponent implements OnInit {

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
