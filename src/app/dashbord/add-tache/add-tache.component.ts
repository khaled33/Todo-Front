import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Todo} from "../../_Modal/todo";
import {TodoService} from "../../_Service/todo.service";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.sass']
})
export class AddTacheComponent implements OnInit {


  TodoForm: FormGroup;
  Todo: Todo;

  constructor(private fb: FormBuilder, private TodoService: TodoService, private route: ActivatedRoute,
              private router: Router) {
    this.TodoForm = this.fb.group({
      label: ['',],
      dateDebut: ['',],
      echeance: ['',],
      descripestion: ['',],
      datefin: ['',]
    })
  }

  ngOnInit(): void {
  }

  onClickSubmit() {
    this.Todo = this.TodoForm.value;

    var validDate: boolean = true;
    if ( this.Todo.datefin &&this.Todo.datefin < this.Todo.dateDebut  &&this.Todo.datefin < this.Todo.echeance) {
      validDate = false;
      alert("Date fin doit etre > Date  Debut && Date Echeance ")

    }
    if (this.Todo.echeance < this.Todo.dateDebut) {
      validDate = false;
      alert("Date Echeance doit etre > Date Debut    ")


    }


    if (validDate) {
      this.AddTodo(this.Todo);

    }
  }

  AddTodo(Todo) {
    this.TodoService.AddTodo(Todo).subscribe((res: any) => {
      this.router.navigate(['']);
    });
  }
}
