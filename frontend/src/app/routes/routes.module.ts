import { HttpClientModule } from '@angular/common/http';
import { ClientCheckoutComponent } from './mainscreen/client-checkout/client-checkout.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddAppointmentComponent } from './appointment/add-appointment/add-appointment.component';
import { MainScreenComponent } from './mainscreen/main-screen/main-screen.component';
import { SignInUpDialogComponent } from './mainscreen/main-screen/sign-in-up-dialog/sign-in-up-dialog.component';
import { DetailCustomerComponent } from './mainscreen/main-screen/detail-customer/detail-customer.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employee/employees-list/employees-list.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { OwnerEditComponent } from './owner/owner-edit/owner-edit.component';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { CdkTableModule} from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';

// 3rd library
import { MatDatetimepickerModule } from '@mat-datetimepicker/core';
import { MatMomentDatetimeModule } from '@mat-datetimepicker/moment';

import { materialProviders } from '../material-config';
import { SalonListComponent } from './salon/salon-list/salon-list.component';
import { SalonCreateComponent } from './salon/salon-create/salon-create.component';
import { SalonEditComponent } from './salon/salon-edit/salon-edit.component';
import { AppointmentComponent } from './appointment/appointment.component';

const COMPONENTS = [
  ClientCheckoutComponent,
  SignInUpDialogComponent,
  DetailCustomerComponent,
  MainScreenComponent,
  DashboardComponent,
  LoginComponent,
  RegisterComponent,
  EmployeesListComponent,
  EmployeeEditComponent,
  EmployeeCreateComponent,
  OwnerListComponent,
  OwnerEditComponent,
  OwnerCreateComponent,
  SalonListComponent,
  SalonEditComponent,
  SalonCreateComponent,
  AddAppointmentComponent,
  AppointmentComponent
];
const COMPONENTS_DYNAMIC = [
  DetailCustomerComponent,
  SignInUpDialogComponent,
];

@NgModule({
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
  imports: [
    HttpClientModule,
    FormsModule,
    CdkTableModule,
    SharedModule,
    RoutesRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatListModule,
    MatSidenavModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatMomentDatetimeModule,
    MatDatetimepickerModule,
    MatDialogModule,
  ],
  providers: [materialProviders],
})
export class RoutesModule {}
