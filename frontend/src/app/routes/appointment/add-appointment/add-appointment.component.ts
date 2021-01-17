import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement {
  label: string;
  data: string;
}

export interface ListElement {
  no: string;
  name: string;
  price: string;
  disc: string;
}

const LISTELEMENT_DATA: ListElement[] = [
  { no: '1', name: 'Service 1', price: '50$', disc: '10$' },
  { no: '2', name: 'Service 2', price: '50$', disc: '10$' },
  { no: '3', name: 'Service 3', price: '50$', disc: '10$' },
  { no: '4', name: 'Service 4', price: '50$', disc: '10$' },
];

const ELEMENT_DATA: PeriodicElement[] = [
  { label: 'Name', data: 'Customer Name' },
  { label: 'Phone', data: '0912345678' },
  { label: 'Email', data: 'email@email.com' },
  { label: 'FB', data: 'FB Link' },
];
interface Days {
	name: string;
}

interface Employees {
	name: string;
}

interface Hours {
	name: string;
}

interface ServiceCategory {
	name: string;
}

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {

  days: Days[] = [
		{name: '1 Day Before'},
		{name: '2 Day Before'},
		{name: '3 Day Before'},
		{name: '4 Day Before'},
		{name: '5 Day Before'},
		{name: '6 Day Before'},
		{name: '7 Day Before'}
  ];

  servicecategory = [
		{name: 'Service 1'},
		{name: 'Service 2'},
		{name: 'Service 3'},
		{name: 'Service 4'},
		{name: 'Service 5'},
		{name: 'Service 6'},
    {name: 'Service 7'},
    {name: 'Service 8'},
		{name: 'Service 9'},
		{name: 'Service 10'},
		{name: 'Service 11'},
		{name: 'Service 12'},
		{name: 'Service 13'}
  ];

  value: string;
  Servicecategory = this.servicecategory;

  filter(value: string) {
    if (value) {
      return this.servicecategory.filter(ser => ser.name.toLowerCase().startsWith(value.toLowerCase()));
    }

    return this.servicecategory;
  }

  hours: Hours[] = [
		{name: '1 Hours Before'},
		{name: '2 Hours Before'},
		{name: '3 Hours Before'},
		{name: '4 Hours Before'},
		{name: '5 Hours Before'},
		{name: '6 Hours Before'},
		{name: '7 Hours Before'}
  ];

  employees: Employees[] = [
		{name: 'Employee 1'},
		{name: 'Employee 2'},
		{name: 'Employee 3'},
		{name: 'Employee 4'},
		{name: 'Employee 5'},
		{name: 'Employee 6'},
		{name: 'Employee 7'}
  ];
  
  addappointmentForm: FormGroup;

  displayedColumns: string[] = ['label', 'data'];

  displayedListColumns: string[] = ['no', 'name', 'price'];

  dataSource = ELEMENT_DATA;

  dataListSource = LISTELEMENT_DATA;
  
  constructor(private addappointmentFB: FormBuilder) { }

  ngOnInit(): void {
    this.addappointmentForm = this.addappointmentFB.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      date: [null, [Validators.required]],
      start_time: [null, [Validators.required]],
      end_time: [null, [Validators.required]],
      note: [null, [Validators.required]],
      employees: [null, [Validators.required]],
      days: [null, [Validators.required]],
      hours: [null, [Validators.required]],
      servicecategory: [null, [Validators.required]]
    });
    
  }
}
