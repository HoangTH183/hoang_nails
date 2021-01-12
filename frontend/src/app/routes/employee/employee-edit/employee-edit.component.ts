import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface role {
  name: string;
};
interface salon {
  names: string;
}

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
})
export class EmployeeEditComponent implements OnInit {

  urllink:string = "../../../assets/images/avatar.png";
  selectFiles(event){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.urllink = event.target.result
      }
    }
  }
  employeeForm: FormGroup;
  role: role[] = [
    { name: 'Role 1' },
    { name: 'Role 2' },
    { name: 'Role 3' },
    { name: 'Role 4' },
    { name: 'Role 5' },
    { name: 'Role 6' },
    { name: 'Role 7' },
  ];
  salon: salon[] = [
    { names: 'Salon 1' },
    { names: 'Salon 2' },
    { names: 'Salon 3' },
    { names: 'Salon 4' },
    { names: 'Salon 5' },
    { names: 'Salon 6' },
    { names: 'Salon 7' },
  ];

  constructor(private fb: FormBuilder, private employeeFB: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.employeeForm = this.employeeFB.group({
      fullname: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      passcode: [null, [Validators.required]],
      roleIds: [null, [Validators.required]],
      salonIds: [null, [Validators.required]],
      percent: [null, [Validators.required]],
      cashpercent: [null, [Validators.required]],
      checkpercent: [null, [Validators.required]],
    });
  }
}
