import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../_Service/todo.service";
import {Todo} from "../../_Modal/todo";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.sass']
})
export class ListTacheComponent implements OnInit {
Todos:Array<Todo>;
Todo:Todo;
  constructor(private TodoService:TodoService,private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
 this.getAll();
  }

  getAll(){
    this.TodoService.getAllTodo().subscribe(data => {
      console.log(data)
      this.Todos=data;
    })
  }
  getTodo(id: HTMLAnchorElement) {
    console.log(id.id)
    this.TodoService.getByIdTodo(id.id).subscribe(data => {
      this.Todo=data;
     })
  }

  delete(id) {

    var x = confirm("Are you sure you want to delete?");
    if (x){
      this.TodoService.DeleteTodo(id.id).subscribe(data => {
        this.getAll();
      });

      return true;
    }
    else
      return false;
  }

  update(id: HTMLAnchorElement) {
    this.router.navigate(['/ModifeTache'], { queryParams: { id: id.id }});

  }

  changerStatus(Event) {
    console.log(Event)
    var id=Event.id;
    var status=Event.status;

    if (status==="Cours"){

      this.TodoService.changerStatus(id,"Complété").subscribe(data => {
        this.getAll();
        console.log("hjklmlkjhgf")
      });
    }

  }

}
