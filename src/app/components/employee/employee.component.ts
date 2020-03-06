import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,NgForm, Validators } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { Injectable } from '@angular/core';
import {TaskService} from 'src/app/service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  leaveform= new FormGroup({
    reason: new FormControl('',[Validators.required]),
    days: new FormControl('',Validators.required),
    to: new FormControl('',Validators.required),
    from: new FormControl('',Validators.required),
    
  });
  show=[];
  constructor(private leaveService:TaskService,private router : Router) {
    this.leaveService.admin().subscribe(show => {
      console.log(show)
      this.show.push(show);
    }, error => console.log(error));

   }
   logout()
  {
    this.router.navigate(['/']);
  }
  onSubmit()
  {
  //console.warn(this.leaveform.value);
  this.leaveService.employee(this.leaveform.value.reason,this.leaveform.value.days,this.leaveform.value.from,this.leaveform.value.to)
      .subscribe(response=>{
        console.log(response),
      error=>console.log(error)
  }
  );
}
  

  ngOnInit(): void {
  }

}
