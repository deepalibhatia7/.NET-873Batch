import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentarray',
  templateUrl: './studentarray.component.html',
  styleUrls: ['./studentarray.component.css']
})
export class StudentarrayComponent implements OnInit {
  student:any[]=[
    {"Sid":1001,"name":"Kunal","age":19,"IsCleared":true},
    {"Sid":1002,"name":"Harsh","age":19,"IsCleared":false},
    {"Sid":1003,"name":"Jatin","age":19,"IsCleared":false},
    {"Sid":1004,"name":"Charvi","age":19,"IsCleared":true},
    {"Sid":1005,"name":"Deepali","age":19,"IsCleared":true}
  ];
  picture="assets/images/ball.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
