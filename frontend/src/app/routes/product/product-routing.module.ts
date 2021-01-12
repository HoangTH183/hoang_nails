import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryCreateComponent } from './product-category-create/product-category-create.component';
import { ProductCategoryEditComponent } from './product-category-edit/product-category-edit.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';



const routes: Routes = [
  { 
    path: 'product-manager', 
    component: ProductListComponent, 
    data: { title: 'Product Manager', titleI18n: 'Product Manager' }
  },
  {
    path: 'product-edit',
    component: ProductEditComponent,
    data: { title: 'Product Edit', titleI18n: 'Product Edit' },
  },
  {
    path: 'product-create',
    component: ProductCreateComponent,
    data: { title: 'Product Create', titleI18n: 'Product Create' },
  },
  { 
    path: 'product-category-manager', 
    component: ProductCategoryListComponent, 
    data: { title: 'Product Category Manager', titleI18n: 'Product Category Manager' }
  },
  {
    path: 'product-category-edit',
    component: ProductCategoryEditComponent,
    data: { title: 'Product Category Edit', titleI18n: 'Product Category Edit' },
  },
  {
    path: 'product-category-create',
    component: ProductCategoryCreateComponent,
    data: { title: 'Product Category Create', titleI18n: 'Product Category Create' },
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
export class ProductRoutingModule { }
