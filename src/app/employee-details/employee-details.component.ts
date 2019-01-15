import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ActivatedRouteSnapshot,Router } from '@angular/router';
import {EmployeeserviceService } from '../employeeservice.service';
import { Iemployee } from '../iemployee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees:Iemployee[];
  statusMsg:string;
   
  constructor(private _service:EmployeeserviceService,private activatedRoute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
    let empCode=this.activatedRoute.snapshot.params["empcode"];
    this.employees=this._service.getEmployee().filter(x =>x.code==empCode);
    if(this.employees.length==0){
      this.statusMsg="Emp code does not exist in our records thank you"
    }

    console.log(this.employees)
  }
  naviagte(){
    this._route.navigate(['/employees'])

  }
}
