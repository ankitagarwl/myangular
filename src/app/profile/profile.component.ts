import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../IEmployee';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: IEmployee;
  firstname:string;
  middlename:string;
  lastname :string;
  contactno:string;
  emailid:string;
  employeecode:number;
  employeeid:number;
  constructor() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.firstname = this.currentUser.firstname;
    this.middlename = this.currentUser.middlename;
    this.lastname = this.currentUser.lastname;
    this.contactno = this.currentUser.contactno;
    this.emailid = this.currentUser.email;
    this.employeecode = this.currentUser.employeecode;
    this.employeeid = this.currentUser.Employee_Id;
   }

  ngOnInit() {
  }

}
