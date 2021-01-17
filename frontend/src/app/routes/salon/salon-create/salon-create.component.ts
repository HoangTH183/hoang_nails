import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Salon } from 'models/salon';

interface Selected {
	name: string;
}

@Component({
  selector: 'app-salon-create',
  templateUrl: './salon-create.component.html'
})
export class SalonCreateComponent implements OnInit {

  salon: Salon;
  salonForm: FormGroup;

  selected: Selected[] = [
		{name: 'Mon'},
		{name: 'Tue'},
		{name: 'Wed'},
		{name: 'Thu'},
		{name: 'Fri'},
		{name: 'Sat'},
		{name: 'Sun'}
	];

  constructor(private fb: FormBuilder,
    private salonFB : FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
    this.salonForm = this.salonFB.group({		
      fullname:[null, [Validators.required]],
      username:[null, [Validators.required]],
      password:[null, [Validators.required]],
      email:[null, [Validators.required]],
      phone:[null, [Validators.required]],
      address: [null, [Validators.required]],
      selected: [null, [Validators.required]],
      opening_hour: [null, [Validators.required]],
      closing_hour: [null, [Validators.required]],
    });
  }

}
