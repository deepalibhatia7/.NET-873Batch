import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatype2',
  templateUrl: './datatype2.component.html',
  styleUrls: ['./datatype2.component.css']
})
export class Datatype2Component implements OnInit {
 // Declaring variables
  name:string="Deepali";
  age:number;
  hobbies:string[];
  marks:Array<number>;
  Istrue:boolean;
  student:object;
  tupleval:[string,number,boolean]
  dynamicvalue:any;
  picture="assets/images/ball.jpg";
//Initializing values for variables 
  constructor() { 
    this.age=25;
    this.hobbies=["Playing","Dancing"];
    this.marks=[89,90,78];
    this.Istrue=false;
    this.tupleval=["Deepali",25,true];
    this.student={fathername:"Kumar",City:"Mumbai"};
    this.dynamicvalue="Hi!!";
    this.dynamicvalue=true;

  }

  ngOnInit(): void {
  }

}
