import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../_Service/todo.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private TodoService:TodoService) { }
data:any;
  ngOnInit(): void {
    this.TodoService.TodoStat().subscribe(value =>
    {
      this.data=value
    })
  }

}
