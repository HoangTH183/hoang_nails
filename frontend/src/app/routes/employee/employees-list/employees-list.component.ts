import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

import {MatSort} from '@angular/material/sort';

export interface PeriodicElement {
  employeename: string;
  id: number;
  role: string;
  status: string;
  create : string;
  actions : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, employeename: 'employee 11', role: 'role 1', status: '', create:'22/12/2020', actions:''},
  {id: 2, employeename: 'employee 12', role: 'role 1', status: '', create:'22/12/2020', actions:''},
  {id: 3, employeename: 'employee 13', role: 'role 1', status: '', create:'22/12/2020', actions:''},
  {id: 4, employeename: 'employee 14', role: 'role 1', status: '', create:'22/12/2020', actions:''},
  {id: 5, employeename: 'employee 15', role: 'role 1', status: '', create:'22/12/2020', actions:''},
  {id: 6, employeename: 'employee 16', role: 'role 1', status: '', create:'22/12/2020', actions:''},
  {id: 7, employeename: 'employee 17', role: 'role 1', status: '', create:'22/12/2020', actions:''},
  {id: 8, employeename: 'employee 18', role: 'role 1', status: '', create:'22/12/2020', actions:''},
  {id: 9, employeename: 'employee 19', role: 'role 1', status: '', create:'22/12/2020', actions:''},
  {id: 10, employeename: 'employee 20', role: 'role 1', status: '', create:'22/12/2020', actions:''},
];
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'employeename', 'role', 'status', 'create', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

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

  constructor() { }

  ngOnInit(): void {
  }

}
