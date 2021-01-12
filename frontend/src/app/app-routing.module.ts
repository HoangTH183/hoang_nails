import { SignupComponent } from './guest/routes/login-guest/signup/signup.component';
import { SigninComponent } from './guest/routes/login-guest/signin/signin.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/guestlogin' },
  { path: 'guestlogin', component:SigninComponent },
  { path: 'signup', component:SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
