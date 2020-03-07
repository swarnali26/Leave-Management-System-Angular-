import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewComponent } from './view/view.component';
import { SidenavadminComponent } from './sidenavadmin/sidenavadmin.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { SidenavuserComponent } from './sidenavuser/sidenavuser.component';
const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'loginform',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'admin',component:AdminComponent},
  {path:'view',component:ViewComponent},
  {path:'sidenav',component:SidenavadminComponent},
  {path:'myleave',component:MydetailsComponent},
  {path:'usernav',component:SidenavuserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HeaderComponent,LoginComponent]