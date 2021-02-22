import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SecurityComponent } from './security/security.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtClientService } from './jwt-client.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateuserComponent } from './createuser/createuser.component';

import { MoolahuserdetailsComponent } from './moolahuserdetails/moolahuserdetails.component';
import { Admincontrol2Component } from './admincontrol2/admincontrol2.component';
import { MoolahuserhomepageComponent } from './moolahuserhomepage/moolahuserhomepage.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CreatePrimaryCComponent } from './create-primary-c/create-primary-c.component';
import { CreateSecondaryCComponent } from './create-secondary-c/create-secondary-c.component';
import { MoolahuserPortfolioComponent } from './moolahuser-portfolio/moolahuser-portfolio.component';
import { MoolahuserModifyPortfolioComponent } from './moolahuser-modify-portfolio/moolahuser-modify-portfolio.component';
import { CreatePfComponent } from './create-pf/create-pf.component';
import { ModifyPfComponent } from './modify-pf/modify-pf.component';
//import { NgApexchartsModule } from 'ng-apexcharts';
import { CreateConstantCComponent } from './create-constant-c/create-constant-c.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
 import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DurationPickerModule} from 'ngx-duration-picker';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecurityComponent,
    HomeComponent,
    CreateuserComponent,
  
    MoolahuserdetailsComponent,
    Admincontrol2Component,
    MoolahuserhomepageComponent,
    
    CreatePrimaryCComponent,
    
    CreateSecondaryCComponent,
    
    MoolahuserPortfolioComponent,
    
    MoolahuserModifyPortfolioComponent,
    
    CreatePfComponent,
    
    ModifyPfComponent,
    
    CreateConstantCComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     FormsModule,
     AppRoutingModule,
   //  NgApexchartsModule,
     //BrowserAnimationsModule,
    // NgxMaterialTimepickerModule.setLocale('ar-AE'),
      MatFormFieldModule,
    MatInputModule,
MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,        // <----- import for date formating(optional)
    NgbModule ,
     DurationPickerModule,
  ],
  providers: [JwtClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
