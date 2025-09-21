import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './Auth/login/login.component';
import { HomeLoginComponent } from './home-login/home-login.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homelogin', component: HomeLoginComponent },
  { path: '**', redirectTo: '' }
];