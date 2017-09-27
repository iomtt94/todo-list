import { ToDoItemModel } from '../models/todo-item-model';
import { Data } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToDoItemCompletedModel } from '../models/todo-item-completed-model';

@Injectable()
export class TodoService {

  public todos: ToDoItemModel[] = [];
  constructor() { }

  addTodo(userInput: string): void {
    let todo = new ToDoItemModel(userInput, false, Date.now());
    this.todos.push(todo);
    console.log(this.todos);
  }

  deleteTodo(todo: ToDoItemModel) {
    if (this.todos.indexOf(todo) !== -1) {
       this.todos.splice(this.todos.indexOf(todo), 1);
    }
    console.log(this.todos);
  }

  deleteSelectedTodos(): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].isComplited) this.todos.splice(i, 1);
    }
    console.log(this.todos);
  }
}
