import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Salon {
	name: string;
}
@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html'
})
export class ServiceCreateComponent implements OnInit {

  salon: Salon[] = [
		{name: 'Salon 1'},
		{name: 'Salon 2'},
		{name: 'Salon 3'},
		{name: 'Salon 4'},
		{name: 'Salon 5'},
		{name: 'Salon 6'},
		{name: 'Salon 7'}
	];

   customerGroupForm: FormGroup;

  constructor(private fb: FormBuilder,
    private customerGroupFB : FormBuilder,
    private router: Router,) {}

  ngOnInit(): void {
      this.customerGroupForm = this.customerGroupFB.group({		
      salon:[null, [Validators.required]],
      name:[null, [Validators.required]]
    });
  }
}
