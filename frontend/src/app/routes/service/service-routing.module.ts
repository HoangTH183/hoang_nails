import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceCategoryCreateComponent } from './service-category-create/service-category-create.component';
import { ServiceCategoryEditComponent } from './service-category-edit/service-category-edit.component';
import { ServiceCategoryListComponent } from './service-category-list/service-category-list.component';
import { ServiceCreateComponent } from './service-create/service-create.component';
import { ServiceEditComponent } from './service-edit/service-edit.component';
import { ServiceListComponent } from './service-list/service-list.component';



const routes: Routes = [
  { 
    path: 'service-manager', 
    component: ServiceListComponent, 
    data: { title: 'Service Manager', titleI18n: 'Service Manager' }
  },
  {
    path: 'service-edit',
    component: ServiceEditComponent,
    data: { title: 'Service Edit', titleI18n: 'Service Edit' },
  },
  {
    path: 'service-create',
    component: ServiceCreateComponent,
    data: { title: 'Service Create', titleI18n: 'Service Create' },
  },
  { 
    path: 'service-category-manager', 
    component: ServiceCategoryListComponent, 
    data: { title: 'Service Category Manager', titleI18n: 'Service Category Manager' }
  },
  {
    path: 'service-category-edit',
    component: ServiceCategoryEditComponent,
    data: { title: 'Service Category Edit', titleI18n: 'Service Category Edit' },
  },
  {
    path: 'service-category-create',
    component: ServiceCategoryCreateComponent,
    data: { title: 'Service Category Create', titleI18n: 'Service Category Create' },
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
export class ServiceRoutingModule { }
