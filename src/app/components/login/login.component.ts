import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,NgForm, Validators } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { Injectable } from '@angular/core';
import {TaskService} from 'src/app/service/task.service';
import{HttpClient,HttpHeaders } from '@angular/common/http'; 



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform= new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',Validators.required),
    
  });
  constructor(private loginService:TaskService) { }  
  onSubmit()
  {
    console.warn(this.loginform.value);
    this.loginService.logindata(this.loginform.value.email,this.loginform.value.password)
      .subscribe(response=>console.log(response),
      error=>console.log(error)
      );
     
  }

  ngOnInit(): void {
  }
  
}
