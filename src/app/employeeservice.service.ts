import { Injectable } from '@angular/core';
import{Iemployee} from './iemployee';
import{Http,Response}  from '@angular/http'
import{Observable} from 'rxjs'
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';
import  'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private _htpp:Http) { }
  getEmployee():Iemployee[]{

    return[
      {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '2/6/1988'
    },
    {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    },
    {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: '2/8/1979'
    },
    {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '1/1/1980'
    },
    ]
  }

getWeatherReport(zip){
  
  return this._htpp.get("http://localhost/OPSDashboardAPI/pickup/OnCallDetails?ConfirmationNumber="+zip).map((response:Response)=>response.json).catch(this.handleError)
}
handleError(error:Response){
  console.log("error="+error);
return Observable.throw(error);

  

}
}
