import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Selected {
	name: string;
}

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html'
})
export class OwnerEditComponent implements OnInit {

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

  // createForm() {
	// 	this.ownerForm = this.ownerFB.group({		
  //   	fullname:[null, [Validators.required]],
  //   	username:[null, [Validators.required]],
  //   	password:[null, [Validators.required]],
  //   	email:[null, [Validators.required]],
	// 		phone:[null, [Validators.required]],
  //   	address: [null, [Validators.required]],
	// 		selected: [null, [Validators.required]],
	// 		fb_link: [null, [Validators.required]],
  //   	ig_link: [null, [Validators.required]],
	//   });
	// }

  // getErrorMessage(form: FormGroup) {
  //   return form.get('email').hasError('required')
  //     ? 'You must enter a value'
  //     : form.get('email').hasError('email')
  //     ? 'Not a valid email'
  //     : '';
  // }

}
