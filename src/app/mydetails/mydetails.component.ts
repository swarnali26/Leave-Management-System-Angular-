import { Component, OnInit } from '@angular/core';
import {TaskService} from 'src/app/service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit {

  show=[];
  constructor(private myleaveService:TaskService,private router : Router) {
    this.myleaveService.myleave().subscribe(show => {
      console.log(show)
      this.show.push(show);
    }, error => console.log(error));
  }

  ngOnInit(): void {
  }

}
