import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IEmployee } from '../IEmployee';
import { IResult } from './IResult';
import { IPunches } from './IPunches';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()
export class IsvalidService {

  private _url :string = "http://localhost:55131/api/User/Login";
  private _punchesurl :string = "http://localhost:55131/api/User/punches";
  selectedT: any;
  constructor(private http : HttpClient) { }



  checkusername(userid: string,pass:string) : Observable<IResult> {
    return this.http.post<any>(this._url,{ username: userid, password:  pass},httpOptions).map(
    
      IResult => {
        localStorage.setItem('currentUser', JSON.stringify(IResult.Results));
        return IResult});
    
}

punchesbyemp(empcode: number) : Observable<IResult> {
  return this.http.post<any>(this._punchesurl,{ employee_code: empcode},httpOptions).map(
  
    IResult => {
   
      return IResult});
  
}



getProcessTemplates(): Observable<IResult> {
   return this.http.get<any>("/assets/jsons/process-templates.json").map(IResult => {
     console.log(IResult);
     return IResult
   }); 
}


    }



