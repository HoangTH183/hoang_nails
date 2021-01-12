import { ClientCheckoutComponent } from './mainscreen/client-checkout/client-checkout.component';
import { MainScreenComponent } from './mainscreen/main-screen/main-screen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { AuthGuard } from '@core';
import { EmployeesListComponent } from './employee/employees-list/employees-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { OwnerEditComponent } from './owner/owner-edit/owner-edit.component';
import { SalonListComponent } from './salon/salon-list/salon-list.component';
import { SalonCreateComponent } from './salon/salon-create/salon-create.component';
import { SalonEditComponent } from './salon/salon-edit/salon-edit.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard', titleI18n: 'dashboard' },
      },
      {
        path: 'main-screen',
        component: MainScreenComponent,
        data: { title: 'Main Screen', titleI18n: 'main-screen' },
      },
      {
        path: 'client-checkout',
        component: ClientCheckoutComponent,
        data: { title: 'Client Checkout', titleI18n: 'client-checkout' },
      },
      {
        path: 'appointment',
        component: AppointmentComponent,
        data: { title: 'Appointment', titleI18n: 'appointment' },
      },
      {
        path: 'employee-manager',
        component: EmployeesListComponent,
        data: { title: 'Employee Manager', titleI18n: 'employee-manager' },
      },
      {
        path: 'employee-create',
        component: EmployeeCreateComponent,
        data: { title: 'Employee Create', titleI18n: 'employee-create' },
      },
      {
        path: 'employee-edit',
        component: EmployeeEditComponent,
        data: { title: 'Employee Edit', titleI18n: 'employee-edit' },
      },
      {
        path: 'owner-manager',
        component: OwnerListComponent,
        data: { title: 'Owner Manager', titleI18n: 'owner-manager' },
      },
      {
        path: 'owner-create',
        component: OwnerCreateComponent,
        data: { title: 'Owner Create', titleI18n: 'owner-create' },
      },
      {
        path: 'owner-edit',
        component: OwnerEditComponent,
        data: { title: 'Owner Edit', titleI18n: 'owner-edit' },
      },
      {
        path: 'salon-manager',
        component: SalonListComponent,
        data: { title: 'Salon Manager', titleI18n: 'salon-manager' },
      },
      {
        path: 'salon-create',
        component: SalonCreateComponent,
        data: { title: 'Salon Create', titleI18n: 'salon-create' },
      },
      {
        path: 'salon-edit',
        component: SalonEditComponent,
        data: { title: 'Salon Edit', titleI18n: 'salon-edit' },
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
        data: { title: 'Product', titleI18n: 'product' },
      },
      {
        path: 'service',
        loadChildren: () => import('./service/service.module').then(m => m.ServiceModule),
        data: { title: 'Service', titleI18n: 'service' },
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
        data: { title: 'Customer', titleI18n: 'customer' },
      },
      {
        path: 'design',
        loadChildren: () => import('./design/design.module').then(m => m.DesignModule),
        data: { title: 'Design', titleI18n: 'design' },
      },
      {
        path: 'material',
        loadChildren: () => import('./material/material.module').then(m => m.MaterialModule),
        data: { title: 'Material', titleI18n: 'material' },
      },
      {
        path: 'media',
        loadChildren: () => import('./media/media.module').then(m => m.MediaModule),
        data: { title: 'Media', titleI18n: 'media' },
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
        data: { title: 'Forms', titleI18n: 'forms' },
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule),
        data: { title: 'Tables', titleI18n: 'tables' },
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
        data: { title: 'Profile', titleI18n: 'profile' },
      },
      {
        path: 'sessions',
        loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Sessions', titleI18n: 'sessions' },
      },
      {
        path: 'helpers',
        loadChildren: () => import('./helpers/helpers.module').then(m => m.HelpersModule),
      },
      {
        path: 'permissions',
        loadChildren: () =>
          import('./permissions/permissions.module').then(m => m.PermissionsModule),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Login', titleI18n: 'login' } },
      {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register', titleI18n: 'register' },
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
