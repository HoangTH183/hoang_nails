import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.scss']
})
export class AddDiscountComponent implements OnInit {

  adddiscountForm: FormGroup;

  constructor(private adddiscountFB: FormBuilder) { }

  ngOnInit(): void {
  }

}
