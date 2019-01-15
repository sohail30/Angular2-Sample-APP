import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeecount',
  templateUrl: './employeecount.component.html',
  styleUrls: ['./employeecount.component.css']
})
export class EmployeecountComponent implements OnInit {
@Input()
all:number;
@Input()
male:number;
@Input()
female:number;

  constructor() {
    //this.all=5
   // this.female=2
   // this.male=5
   }
   selectedRadioButtonValue:string="all";
@Output()
   CustomEvent:EventEmitter<string>= new EventEmitter<string>();

   radiobuttonselectionchange(){
   // console.log(this.selectedRadioButtonValue);
     
     setTimeout(() => this.CustomEvent.emit(this.selectedRadioButtonValue),0)
     //console.log("hi"+this.selectedRadioButtonValue);
   }

  ngOnInit() {
  }

}
