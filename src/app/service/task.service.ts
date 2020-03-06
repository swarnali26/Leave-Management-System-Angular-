import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpclient:HttpClient) { }
  senddata(firstname:string,lastname:string,email:string,password:string,phone:string)
  {
    return this.httpclient.post('http://localhost:8000/api/register',{firstname:firstname,lastname:lastname,
    email:email,password:password,phone:phone},
    {headers:new HttpHeaders({'Content-Type':'application/json'})});
  } 
  logindata(email:string,password:string)
  {
    return this.httpclient.post('http://localhost:8000/api/login',{email:email,password:password},
    {headers:new HttpHeaders({'Content-Type':'application/json'})});
    //window.localStorage.getItem(token)
  }
  employee(reason:string,days:string,from:Date,to:Date)
  {
    return this.httpclient.post('http://localhost:8000/api/employee',{reason:reason,days:days,from:from,to:to},
    {
      headers:new HttpHeaders({'token':window.localStorage.getItem('token')})
    });
    //window.localStorage.getItem(token)
  }
admin()
{
  return this.httpclient.get('http://localhost:8000/api/leave',
  {
    headers:new HttpHeaders({'token':window.localStorage.getItem('token')})
  });
}

}
