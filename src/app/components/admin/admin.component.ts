import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TaskService} from 'src/app/service/task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   show=[];
  constructor(private adminService:TaskService,private router : Router) {
    this.adminService.admin().subscribe(show => {
      console.log(show)
      this.show.push(show);
    }, error => console.log(error));
   }
  logout()
  {
    this.router.navigate(['/']);
  }
   employeeDetails(id: number){
    this.router.navigate(['view', id]);
  }
  

  ngOnInit() {
    

    

}

}
