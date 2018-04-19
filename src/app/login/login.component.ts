import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IsvalidService } from '../isvalid.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public username;
public password;
alldata :any;
 error: string;
  constructor( private route: ActivatedRoute,
    private router: Router, private Isvalidservice: IsvalidService,private httpClient:HttpClient) { }

  ngOnInit() {
  }

  login(){
    this.Isvalidservice.checkusername(this.username, this.password).subscribe
    (
      data => {
        if(data.Status == "true")
      {
       
      console.log('Logged in');
      this.error= "Logged in";
      this.router.navigate(['dashboard']); 
      }
      else
      {
        console.log('Invalid credentials');
        this.error= "Invalid credentials";
      }
      },
      error => { 
        console.log('Something went wrong. Error : ' + error); // Error if any
        this.error= 'Something went wrong. Error : ' + error;
      }
       // Here call is completed. If you wish to do something 
      // after call is completed(since this is an asynchronous call), this is the right place to do. ex: call another function
    );

    // this.service.addSession(this.data).subscribe(
    //   data => { console.log(data) // Data which is returned by call
    //   },
    //   error => { console.log(error); // Error if any
    //   },
    //   ()=> // Here call is completed. If you wish to do something 
    //   // after call is completed(since this is an asynchronous call), this is the right place to do. ex: call another function
    // )

    //console.log(this.alldata);
    
  }




  

}
