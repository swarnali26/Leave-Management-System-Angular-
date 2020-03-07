import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule }    from '@angular/common/http';
import {ReactiveFormsModule}  from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewComponent } from './view/view.component';
import { SidenavadminComponent } from './sidenavadmin/sidenavadmin.component';
import { HomeComponent } from './home/home.component';
import { SidenavuserComponent } from './sidenavuser/sidenavuser.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
@NgModule({
  declarations: [
    AppComponent,
    
    routingComponents,
    RegistrationComponent,
    EmployeeComponent,
    AdminComponent,
    ViewComponent,
    SidenavadminComponent,
    HomeComponent,
    SidenavuserComponent,
    MydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
