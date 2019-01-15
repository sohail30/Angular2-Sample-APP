import { Component, OnInit } from '@angular/core';
import{ColorserviceService}from '../colorservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color:string;
  //private _userpreference:ColorserviceService
  constructor(private _userpreference:ColorserviceService) { 
    //this._userpreference= new ColorserviceService();
  }

  ngOnInit() {
  }

  get colour():string{ 
    return this._userpreference.colorpreference;

  }
  set colour(value){
    this._userpreference.colorpreference= value;
  }
}
