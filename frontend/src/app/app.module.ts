import { ServiceScreenDialogComponent } from './guest/routes/login-guest/service-screen/service-screen-dialog/service-screen-dialog.component';
import { SignupComponent } from './guest/routes/login-guest/signup/signup.component';
import { SigninComponent } from './guest/routes/login-guest/signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { ThemeModule } from './theme/theme.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { httpInterceptorProviders } from '@core/interceptors';
import { appInitializerProviders } from '@core/initializers';
import { FormlyConfigModule } from './formly-config.module';
import { SignupDialogComponent } from './guest/routes/login-guest/signup/signup-dialog/signup-dialog.component';
import { SignInUpDialogComponent } from './guest/routes/login-guest/signin/sign-in-up-dialog/sign-in-up-dialog.component';
import { ClientCheckoutComponent } from './routes/mainscreen/client-checkout/client-checkout.component';
import { DiscountTicketComponent } from './routes/mainscreen/client-checkout/discount-ticket/discount-ticket.component';
import { AddTipComponent } from './routes/mainscreen/add-tip/add-tip.component';
import { AddDiscountComponent } from './routes/mainscreen/add-discount/add-discount.component';
import { ServiceScreenComponent } from './guest/routes/login-guest/service-screen/service-screen.component';

@NgModule({
  declarations: [AppComponent , SigninComponent ,SignupComponent, SignupDialogComponent, SignInUpDialogComponent, DiscountTicketComponent, AddTipComponent, AddDiscountComponent, ServiceScreenComponent, ServiceScreenDialogComponent],
  entryComponents: [SignupDialogComponent, SignInUpDialogComponent, ServiceScreenDialogComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    ThemeModule,
    RoutesModule,
    SharedModule,

    FormlyConfigModule.forRoot(),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [httpInterceptorProviders, appInitializerProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
