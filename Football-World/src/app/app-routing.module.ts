import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent} from './navbar/navbar.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {TeamOfTheWeekComponent} from './team-of-the-week/team-of-the-week.component';

const routes: Routes =
[
{ path: '', redirectTo: '/home', pathMatch: 'full'},

{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'home', component:LandingPageComponent },
{ path: 'team-of-the-week',component: TeamOfTheWeekComponent},
{ path: '', redirectTo: '/home' , pathMatch:'full'}


];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers: []
})
export class AppRoutingModule { }