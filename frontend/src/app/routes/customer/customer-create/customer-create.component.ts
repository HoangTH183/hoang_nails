import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


interface Salon {
	name: string;
}

interface Group {
	name: string;
}

interface Typed {
	name: string;
}

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup;

  salon: Salon[] = [
		{name: 'Salon 1'},
		{name: 'Salon 2'},
		{name: 'Salon 3'},
		{name: 'Salon 4'},
		{name: 'Salon 5'},
		{name: 'Salon 6'},
		{name: 'Salon 7'}
  ];
  
  group: Group[] = [
		{name: 'Group 1'},
		{name: 'Group 2'},
		{name: 'Group 3'},
		{name: 'Group 4'},
		{name: 'Group 5'},
		{name: 'Group 6'},
		{name: 'Group 7'}
  ];
  
  typed: Typed[] = [
		{name: 'Typed 1'},
		{name: 'Typed 2'},
		{name: 'Typed 3'},
		{name: 'Typed 4'},
		{name: 'Typed 5'},
		{name: 'Typed 6'},
		{name: 'Typed 7'}
	];

  constructor(private fb: FormBuilder,
              private customerFB : FormBuilder,
              private router: Router,) {}

  ngOnInit(): void {
    this.customerForm = this.customerFB.group({		
      firstname:[null, [Validators.required]],
      lastname:[null, [Validators.required]],
      birthday:[null, [Validators.required]],
      email:[null, [Validators.required]],
      phone:[null, [Validators.required]],
      address: [null, [Validators.required]],
      salon: [null, [Validators.required]],
      group: [null, [Validators.required]],
      typed: [null, [Validators.required]],
      fb_link: [null, [Validators.required]],
      ig_link: [null, [Validators.required]],
      reward_point: [null, [Validators.required]]
    });
  }

}
