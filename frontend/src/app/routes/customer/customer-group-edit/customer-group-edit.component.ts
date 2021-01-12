import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-group-edit',
  templateUrl: './customer-group-edit.component.html'
})
export class CustomerGroupEditComponent implements OnInit {

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
