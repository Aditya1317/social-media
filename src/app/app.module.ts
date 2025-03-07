import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { ProfileDetailsComponent } from './components/profile/profile-details/profile-details.component';
import { UpdateUserDetailsComponent } from './components/user/update-user-details/update-user-details.component';
import { AuthInterceptor } from './auth-interceptor.service.spec';
import { HttpXSRFInterceptor } from './interceptors/http-xsrf.interceptor'; 



@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    LoginComponent,
    UserDetailsComponent,
    ProfileDetailsComponent,
    UpdateUserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpXSRFInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
