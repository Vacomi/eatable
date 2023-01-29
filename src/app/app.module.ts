import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './session/login/login.component';
import { SignupComponent } from './session/signup/signup.component';
import { NotFoundComponent } from './mostrables/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionComponent } from './session/session.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './home/main/main.component';
import { ProfileComponent } from './home/profile/profile.component';
import { HistoryComponent } from './home/history/history.component';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    SessionComponent,
    HomeComponent,
    MainComponent,
    ProfileComponent,
    HistoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
