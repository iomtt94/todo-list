import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToDoItemModel } from '../models/todo-item-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: ToDoItemModel[];
  fieldNull: boolean = true;

  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this.todos = this._todoService.todos;
  }

  deleteSelected() {
    this._todoService.deleteSelectedTodos();
  }

}
