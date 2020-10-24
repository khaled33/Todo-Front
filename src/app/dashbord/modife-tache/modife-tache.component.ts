import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Todo} from "../../_Modal/todo";
import {TodoService} from "../../_Service/todo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modife-tache',
  templateUrl: './modife-tache.component.html',
  styleUrls: ['./modife-tache.component.sass']
})
export class ModifeTacheComponent implements OnInit {

  TodoForm: FormGroup;
  Todo: Todo;
  id:number;

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
    this.route.queryParams.subscribe(params => {
      this.TodoService.getByIdTodo(params['id']).subscribe(value =>{
        this.Todo=value;
        this.id=params['id'];
        this.TodoForm.get("label").setValue( this.Todo.label);
        this.TodoForm.get("dateDebut").setValue( this.Todo.dateDebut);
        this.TodoForm.get("echeance").setValue( this.Todo.echeance);
        this.TodoForm.get("descripestion").setValue( this.Todo.descripestion);
        this.TodoForm.get("datefin").setValue( this.Todo.datefin);
      })
    });
  }

  onClickSubmit() {
    this.Todo = this.TodoForm.value;

    var validDate: boolean = true;
    if (this.Todo.datefin < this.Todo.dateDebut && this.Todo.datefin < this.Todo.echeance) {
      validDate = false;
      alert("Date fin doit etre > Date  Debut && Date Echeance ")

    }
    if (this.Todo.echeance < this.Todo.dateDebut) {
      validDate = false;
      alert("Date Echeance doit etre > Date Debut    ")


    }
this.Todo.id=this.id;
    console.log(this.Todo)

    if (validDate) {
      this.Upadte(this.Todo);

    }
  }

  Upadte(Todo) {
      this.TodoService.ModifeTodo(Todo).subscribe((res: any) => {
      this.router.navigate(['']);
    });
  }
}
