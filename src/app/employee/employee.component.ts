import { Component, OnInit } from '@angular/core';
import{Iemployee} from '../iemployee'
import {EmployeeserviceService} from '../employeeservice.service'
import {Http,Response} from '@angular/http'
import{ColorserviceService}from '../colorservice.service'
import  { map } from 'rxjs/operators/';
import { error } from '@angular/compiler/src/util';



@Component({
 // selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  //providers:[EmployeeserviceService]
})
export class EmployeeComponent implements OnInit {
employees:Iemployee[];

zipvalue:string
statusMessage:string
weatherData;
//private _userpreference:ColorserviceService
  constructor(private _employeeservice:EmployeeserviceService,private _http:Http,private _userpreference:ColorserviceService) { 
    //this._userpreference= new ColorserviceService();
  }
  CallAPI(){
   
return this._employeeservice.getWeatherReport(this.zipvalue).subscribe(e => this.weatherData=e,
  error=>this.statusMessage="Error Occured" + error)
  }
  ngOnInit() {
    this.employees= this._employeeservice.getEmployee();
  }
  getmoreEmployee():void{
    this.employees= [
      {
          code: 'emp101', name: 'Tom', gender: 'male',
          annualSalary: 5500, dateOfBirth: '2/6/1988'
      },
      {
          code: 'emp102', name: 'Alex', gender: 'male',
          annualSalary: 5700.95, dateOfBirth: '9/6/1982'
      },
      {
          code: 'emp103', name: 'Mike', gender: 'male',
          annualSalary: 5900, dateOfBirth: '2/8/1979'
      },
      {
          code: 'emp104', name: 'Mary', gender: 'female',
          annualSalary: 6500.826, dateOfBirth: '1/1/1980'
      },
      {
        code: 'emp105', name: 'sam', gender: 'male',
        annualSalary: 65000.826, dateOfBirth: '2/7/1980'
    },
    {
      code: 'emp105', name: 'fdf', gender: 'female',
      annualSalary: 65000.826, dateOfBirth: '2/7/1980'
  },
  {
    code: 'emp105', name: 'fdf', gender: 'female',
    annualSalary: 65000.826, dateOfBirth: '2/7/1980'
},
  ];
  }
trackbycode(index:number,employee:any ):string{

  return employee.code;
}

getallemployees():number{

  return this.employees.length
}
getmaleeemployees():number{

  return this.employees.filter(x => x.gender.toLowerCase() =="male").length
}
getfemaleemployees():number{

  return this.employees.filter(x => x.gender.toLowerCase() =="female").length
}
radiobuttonselectedValue:string="all"
onradiobuttonselectedvalueChange(selectedValue:string):void{
  this.radiobuttonselectedValue=selectedValue;
  console.log(selectedValue);
  
} get colour():string{ 
  return this._userpreference.colorpreference;

}
set colour(value){
  this._userpreference.colorpreference= value;
}
}
