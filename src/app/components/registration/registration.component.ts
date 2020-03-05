import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { FormsModule } from '@angular/forms';
import {passwordValidation} from 'src/app/components/registration/registration.validation'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  Registrationform = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]*$")]),
    lastname: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]*$")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]*$")]),
    phone: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]),
  });

  constructor(private formService: TaskService) { }
  onSubmit() {
    //console.warn(this.Registrationform.value);
    this.formService.senddata(this.Registrationform.value.firstname, this.Registrationform.value.lastname,
      this.Registrationform.value.email, this.Registrationform.value.password,
      this.Registrationform.value.phone)
      .subscribe(response => console.log(response),
        error => console.log(error)
      );
    console.warn(this.Registrationform.value);
  }


  ngOnInit(): void {
  }

}
