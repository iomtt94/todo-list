import { ToDoItemModel } from '../models/todo-item-model';
import { Data } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  public todos: ToDoItemModel[] = [];
  constructor() { }

  addTodo(userInput: string): void {
    const todo = new ToDoItemModel(userInput, false, Date.now());
    this.todos.unshift(todo);
  }

  deleteTodo(todo: ToDoItemModel) {
    if (this.todos.indexOf(todo) !== -1) {
       this.todos.splice(this.todos.indexOf(todo), 1);
    }
  }
}
