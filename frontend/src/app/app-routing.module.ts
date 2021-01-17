import { SignupComponent } from './guest/routes/login-guest/signup/signup.component';
import { SigninComponent } from './guest/routes/login-guest/signin/signin.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceScreenComponent } from './guest/routes/login-guest/service-screen/service-screen.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/guestlogin' },
  { path: 'guestlogin', component:SigninComponent },
  { path: 'signup', component:SignupComponent },
  { path:'service-screen', component: ServiceScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
