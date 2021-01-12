import { CustomerGroupCreateComponent } from './customer-group-create/customer-group-create.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerGroupEditComponent } from './customer-group-edit/customer-group-edit.component';
import { CustomerGroupListComponent } from './customer-group-list/customer-group-list.component';


const routes: Routes = [
  { 
    path: 'manager', 
    component: CustomerListComponent, 
    data: { title: 'Customer Manager', titleI18n: 'Customer Manager' }
  },
  {
    path: 'edit',
    component: CustomerEditComponent,
    data: { title: 'Customer Edit', titleI18n: 'Customer Edit' },
  },
  {
    path: 'create',
    component: CustomerCreateComponent,
    data: { title: 'Customer Create', titleI18n: 'Customer Create' },
  },
  { 
    path: 'group-manager', 
    component: CustomerGroupListComponent, 
    data: { title: 'Customer Group Manager', titleI18n: 'Customer Group Manager' }
  },
  {
    path: 'group-edit',
    component: CustomerGroupEditComponent,
    data: { title: 'Customer Group Edit', titleI18n: 'Customer Group Edit' },
  },
  {
    path: 'group-create',
    component: CustomerGroupCreateComponent,
    data: { title: 'Customer Group Create', titleI18n: 'Customer Group Create' },
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
