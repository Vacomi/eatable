import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './home/history/history.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './home/cart/cart.component';
import { MainComponent } from './home/main/main.component';
import { ProductComponent } from './home/main/product/product.component';
import { ProfileComponent } from './home/profile/profile.component';


import { NotFoundComponent } from './mostrables/not-found/not-found.component';
import { LoginComponent } from './session/login/login.component';
import { SessionComponent } from './session/session.component';
import { SignupComponent } from './session/signup/signup.component';
import { PermissionsGuard } from './Guard/permissions.guard';
import { EatableComponent } from './inicio/eatable/eatable.component';


const routes: Routes = [
  // Agregado
  // { path: '' , redirectTo: '/inicio/eatable.', pathMatch:'full' },
  {path: '', component:EatableComponent},

  { path: 'inicio' , redirectTo: '/session/login', pathMatch:'full' },
  { path: 'login', redirectTo: '/session/login', pathMatch: 'full'},
  { path: 'product', component: ProductComponent},

  // { path: 'cart', redirectTo: 'home/cart'},
  { path: 'cart', component: CartComponent},
  { path: 'session', component: SessionComponent, children: [
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent },
  ]},
  { path: 'home', redirectTo: '/home/profile', pathMatch: 'full'},
  { path: 'home', component: HomeComponent,canActivate:[PermissionsGuard], children: [
    { path: 'main', component: MainComponent},
    { path: 'update', redirectTo: '/home/profile/update', pathMatch: 'full'},
    { path: 'profile', component: ProfileComponent },
    { path: 'history', component: HistoryComponent,canActivate:[PermissionsGuard] },
    { path: 'cart', component: CartComponent,canActivate:[PermissionsGuard]}
  ] },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
