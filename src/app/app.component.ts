import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorserviceService } from "./colorservice.service";
@Component({
  selector: 'app-root',
templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2project';
  check:boolean=false;
  firstname:string;
  lastname:string;
  hidesalalry:boolean;
  age;
  salary;
  //it always create instance if we call with new method and two way dat binding wont work
 // private _userpreference:ColorserviceService
  constructor(private _userpreference:ColorserviceService ){
    this.age=20;
    this.salary=41000;
    this.firstname="sohail"
    this.lastname = "shaik"
    this.hidesalalry= false;
    //this._userpreference= new ColorserviceService();
    }
    clickEvent(){
     
      this.hidesalalry=!this.hidesalalry
    }

    get colour():string{ 
      return this._userpreference.colorpreference;
  
    }
    set colour(value){
      this._userpreference.colorpreference= value;
    }
}
