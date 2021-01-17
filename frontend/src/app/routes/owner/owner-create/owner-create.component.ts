import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from 'models/owner';

interface Selected {
	name: string;
}

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html'
})
export class OwnerCreateComponent implements OnInit {

  owner: Owner;
  ownerForm: FormGroup;

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
              private ownerFB : FormBuilder,
              private router: Router,) {}

  ngOnInit(): void {
    this.ownerForm = this.ownerFB.group({		
      fullname:[null, [Validators.required]],
      username:[null, [Validators.required]],
      password:[null, [Validators.required]],
      email:[null, [Validators.required]],
      phone:[null, [Validators.required]],
      address: [null, [Validators.required]],
      selected: [null, [Validators.required]],
    });
  }

}
