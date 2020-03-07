import { Component, OnInit } from '@angular/core';
import {TaskService} from 'src/app/service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 show=[];
  constructor(private adminService:TaskService,private router : Router) {
    this.adminService.view().subscribe(show => {
      console.log(show)
      this.show.push(show);
    }, error => console.log(error));
   }
   back(){
     this.router.navigate(['admin'])
   }

  ngOnInit(): void {
  }

}
