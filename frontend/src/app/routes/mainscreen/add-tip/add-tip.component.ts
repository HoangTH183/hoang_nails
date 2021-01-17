import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Technical {
	name: string;
}

@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.component.html',
  styleUrls: ['./add-tip.component.scss']
})
export class AddTipComponent implements OnInit {

  technical: Technical[] = [
		{name: 'Techincal 1'},
		{name: 'Techincal 2'},
		{name: 'Techincal 3'},
		{name: 'Techincal 4'},
		{name: 'Techincal 5'},
		{name: 'Techincal 6'},
    {name: 'Techincal 7'},
    {name: 'Techincal 8'},
		{name: 'Techincal 9'},
		{name: 'Techincal 10'},
		{name: 'Techincal 11'},
		{name: 'Techincal 12'},
		{name: 'Techincal 13'}
  ];

  addtipForm: FormGroup;

  constructor(private addtipFB: FormBuilder) { }

  ngOnInit(): void {
    this.addtipForm = this.addtipFB.group({
      technical: [null, [Validators.required]],
      tipmoney: [null, [Validators.required]]
    });
  }

}
