import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Datatype2Component } from './datatype2/datatype2.component';
import { EmployeearrayComponent } from './employeearray/employeearray.component';
import { StudentarrayComponent } from './studentarray/studentarray.component';

@NgModule({
  declarations: [
    AppComponent,
    Datatype2Component,
    EmployeearrayComponent,
    StudentarrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
