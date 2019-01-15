import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpModule} from '@angular/http'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';
import { CustomPipe } from './custom.pipe';
import { EmployeecountComponent } from './employeecount/employeecount.component';
import{Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component'
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const approute:Routes=[
{path:'default', component:DefaultpageComponent},
{path:'app', component:AppComponent},
{path:'employees', component:EmployeeComponent},
{path:'employees/:empcode', component:EmployeeDetailsComponent},
{path:'home', component:HomeComponent},
{path:'', redirectTo:'/home',pathMatch:'full'},
{path:'**', component:PagenotfoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CustomPipe,
    EmployeecountComponent,DefaultpageComponent,PagenotfoundComponent, HomeComponent,EmployeeDetailsComponent
  ],
  imports: [



    BrowserModule,FormsModule,HttpModule,RouterModule,RouterModule.forRoot(approute)
  ],
  providers: [],
  bootstrap: [DefaultpageComponent]
})
export class AppModule { }
