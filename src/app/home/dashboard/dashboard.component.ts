import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../../IEmployee';
import { IsvalidService } from '../../isvalid.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: IEmployee;
  name:string;
  contact : string;

  constructor(private isvalidservice: IsvalidService) { 

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.name = this.currentUser.firstname;
    // this.loadAllUsers();
  }

  private yo() {
    alert('adsasdadsdasdasdsasd');
    // this.isvalidservice.getAll().subscribe(users => { this.users = users; });
}

}
