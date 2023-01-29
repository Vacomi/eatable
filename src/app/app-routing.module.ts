import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './home/history/history.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './home/main/main.component';
import { ProfileComponent } from './home/profile/profile.component';

import { NotFoundComponent } from './mostrables/not-found/not-found.component';
import { LoginComponent } from './session/login/login.component';
import { SessionComponent } from './session/session.component';
import { SignupComponent } from './session/signup/signup.component';

const routes: Routes = [
  { path: '' , redirectTo: '/session/login', pathMatch:'full' },
  { path: 'login', redirectTo: '/session/login', pathMatch: 'full'},
  { path: 'session', component: SessionComponent, children: [
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent },
  ]},
  { path: 'home', redirectTo: '/home/profile', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, children: [
    { path: 'main', component: MainComponent },
    { path: 'update', redirectTo: '/home/profile/update', pathMatch: 'full'},
    { path: 'profile', component: ProfileComponent },
    { path: 'history', component: HistoryComponent },
  ] },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
