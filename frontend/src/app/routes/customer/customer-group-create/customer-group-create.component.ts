import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-group-create',
  templateUrl: './customer-group-create.component.html'
})
export class CustomerGroupCreateComponent implements OnInit {

  customerGroupForm: FormGroup;

  constructor(private fb: FormBuilder,
    private customerGroupFB : FormBuilder,
    private router: Router,) {}

  ngOnInit(): void {
    this.customerGroupForm = this.customerGroupFB.group({		
    groupname:[null, [Validators.required]]
  });
  }

}
