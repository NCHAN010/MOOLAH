import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SecurityComponent } from './security/security.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { MoolahuserdetailsComponent } from './moolahuserdetails/moolahuserdetails.component';
import { Admincontrol2Component } from './admincontrol2/admincontrol2.component';
import {MoolahuserhomepageComponent} from './moolahuserhomepage/moolahuserhomepage.component';
import { CreatePrimaryCComponent } from './create-primary-c/create-primary-c.component';
import { CreateSecondaryCComponent } from './create-secondary-c/create-secondary-c.component';
import {CreatePfComponent} from './create-pf/create-pf.component';
import {MoolahuserPortfolioComponent} from './moolahuser-portfolio/moolahuser-portfolio.component';
import {CreateConstantCComponent} from './create-constant-c/create-constant-c.component';

const routes: Routes = [
  
  //{path: '',redirectTo:'moolahuser',pathMatch:'full'},
  {path:'' ,component:HomeComponent},
  {path:'login' ,component:LoginComponent},
  {path:'login/:username/:password',component:MoolahuserhomepageComponent},
  {path:'userHomePg/:userId',component:MoolahuserhomepageComponent},
  {path:'security' ,component:SecurityComponent},
  {path:'create_mUser', component:CreateuserComponent},
  {path: 'details/:id', component: MoolahuserdetailsComponent},
  {path: 'adminControl2', component: Admincontrol2Component},
  {path: 'create_PC/:id' ,component:CreatePrimaryCComponent},
  {path:'create_SC/:id/:orgId',component:CreateSecondaryCComponent},
  {path:'create_SC2/:id',component:CreateSecondaryCComponent},
  {path:'create_PF/:id',component:CreatePfComponent},
  {path:'create_CC/:id',component:CreateConstantCComponent},
  {path:'TEST',component:MoolahuserPortfolioComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
