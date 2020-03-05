import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private htttpclient:HttpClient) { }
  senddata(firstname:string,lastname:string,email:string,password:string,phone:string)
  {
    return this.htttpclient.post('http://localhost:8000/api/register',{firstname:firstname,lastname:lastname,
    email:email,password:password,phone:phone},
    {headers:new HttpHeaders({'Content-Type':'application/json'})});
  } 
  logindata(email:string,password:string)
  {
    return this.htttpclient.post('http://localhost:8000/api/login',{email:email,password:password},
    {headers:new HttpHeaders({'Content-Type':'application/json'})});
  }
  


}
