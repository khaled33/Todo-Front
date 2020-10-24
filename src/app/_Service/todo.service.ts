import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';import {Observable} from "rxjs";
import {Todo} from "../_Modal/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true'
    })
  };

  getAllTodo() {
    return this.http.get<Todo[]>("http://localhost:8081/Todos",this.httpOptions)
  }
  getByIdTodo(id){
    return this.http.get<Todo>("http://localhost:8081/Todo/"+id,this.httpOptions)

  }
  TodoStat(){
    return this.http.get<any>("http://localhost:8081/Todo/Stat",this.httpOptions)

  }
  AddTodo(todo) {
    return this.http.post<Todo>("http://localhost:8081/Todo",JSON.stringify(todo),this.httpOptions);

  }
  ModifeTodo(todo){
    return this.http.put("http://localhost:8081/Todo",JSON.stringify(todo),this.httpOptions);

  }
  DeleteTodo(id){
    return this.http.delete("http://localhost:8081/Todo/"+id,this.httpOptions)

  }
  changerStatus(id,Status){
    return this.http.get("http://localhost:8081/Todo/"+id+"/Status/"+Status,this.httpOptions)

  }
}
