import { SignupComponent } from './login-guest/signup/signup.component';
import { SigninComponent } from './login-guest/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: SigninComponent },
      { path:'signup', component: SignupComponent}
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class GuestRoutingModule {}
